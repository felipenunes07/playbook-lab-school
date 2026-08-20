interface WorkerEnv {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const response = await env.ASSETS.fetch(request);
    const url = new URL(request.url);

    if (request.method === "GET" && response.status === 404 && !url.pathname.includes(".")) {
      const fallback = new Request(new URL("/index.html", url), request);
      return env.ASSETS.fetch(fallback);
    }

    return response;
  },
};
