/**
 * Reveal animations are opt-in via a class on <html>, so that content is
 * never hidden by a script that failed to run.
 *
 * Why this exists: the reveal styles start at opacity 0 and rely on an
 * IntersectionObserver to add `.is-in`. If those callbacks never arrive,
 * every animated block stays invisible — real content lost to a decoration.
 * That is not hypothetical: in a non-compositing browser context (a hidden
 * pane, some embedded webviews) Chromium ties observer delivery to the
 * rendering lifecycle and no callback is ever fired.
 *
 * So: enable the effect synchronously before first paint (no flash), then
 * probe whether observer callbacks actually arrive. If they do not, drop the
 * class and every block falls back to plain visible content.
 */

const ROOT_CLASS = "js-reveal";
/** Hard off-switch: cancels transitions outright instead of unwinding them. */
const OFF_CLASS = "reveal-off";
const PROBE_TIMEOUT_MS = 600;

export function enableRevealAnimations(): void {
  if (typeof document === "undefined") return;

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Reduced motion or no observer support: leave everything visible.
  if (reducedMotion || typeof IntersectionObserver === "undefined") return;

  const root = document.documentElement;
  root.classList.add(ROOT_CLASS);

  let delivered = false;
  const probe = new IntersectionObserver(() => {
    delivered = true;
    probe.disconnect();
  });
  probe.observe(document.body);

  window.setTimeout(() => {
    if (delivered) return;
    probe.disconnect();
    // Removing the opt-in class alone is not enough: blocks that already had
    // a delayed opacity transition queued can sit frozen at opacity 0 in a
    // renderer that never advances frames. OFF_CLASS kills the transition so
    // they snap to visible instead of waiting on a frame that never comes.
    root.classList.add(OFF_CLASS);
    root.classList.remove(ROOT_CLASS);
  }, PROBE_TIMEOUT_MS);
}
