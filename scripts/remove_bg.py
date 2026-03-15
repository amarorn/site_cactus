#!/usr/bin/env python3
"""
Remove fundo de imagem usando rembg.
Uso: python scripts/remove_bg.py <entrada.png> <saida.png>
"""

import base64
import io
import sys

try:
    from rembg import remove
    from PIL import Image
except ImportError:
    print("Instale: pip install rembg pillow")
    sys.exit(1)


def remove_bg_from_file(input_path: str, output_path: str) -> None:
    with open(input_path, "rb") as f:
        img = Image.open(f).convert("RGBA")
    out = remove(img)
    out.save(output_path)
    print(f"Salvo: {output_path}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python remove_bg.py <entrada.png> <saida.png>")
        sys.exit(1)

    input_path = sys.argv[1]
    output_path = sys.argv[2]
    remove_bg_from_file(input_path, output_path)
