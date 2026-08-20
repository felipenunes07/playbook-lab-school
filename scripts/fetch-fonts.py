"""Baixa subsets latinos do Google Fonts para public/fonts.

Auto-hospedar mantém a página com zero requisições a terceiros — é o que
permite empacotar o build num HTML único e é verificado no QA.
"""
import os
import re
import subprocess
import sys

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120 Safari/537.36"
)
OUT = "public/fonts"
WANT_SUBSETS = {"latin", "latin-ext"}

FAMILIES = {
    "Archivo": "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&display=swap",
}


def fetch(url):
    return subprocess.run(
        ["curl", "-sS", "-m", "30", "-A", UA, url], capture_output=True, text=True
    ).stdout


def main():
    os.makedirs(OUT, exist_ok=True)
    total = 0
    for name, url in FAMILIES.items():
        css = fetch(url)
        blocks = re.findall(r"/\* (\S+) \*/\s*@font-face \{(.*?)\}", css, re.S)
        if not blocks:
            print(f"{name}: nenhum @font-face retornado", file=sys.stderr)
            continue
        for subset, body in blocks:
            if subset not in WANT_SUBSETS:
                continue
            weight = re.search(r"font-weight:\s*([\d\s]+);", body).group(1).strip()
            weight = weight.replace(" ", "-")
            style = re.search(r"font-style:\s*(\w+)", body).group(1)
            src = re.search(r"url\((\S+?)\)", body).group(1)
            fn = f"{name}-{weight}-{style}-{subset}.woff2"
            path = os.path.join(OUT, fn)
            subprocess.run(["curl", "-sS", "-m", "30", "-A", UA, "-o", path, src], check=True)
            size = os.path.getsize(path)
            total += size
            print(f"{fn}: {size // 1024} kB")
    print(f"total: {total // 1024} kB")


if __name__ == "__main__":
    main()
