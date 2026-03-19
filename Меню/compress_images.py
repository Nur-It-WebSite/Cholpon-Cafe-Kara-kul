"""
Скрипт для сжатия фотографий для GitHub Pages.
Сжимает .webp и .jpeg/.jpg файлы с балансом качества (75).
Сохраняет оригиналы в папку originals/
"""

import os
import shutil
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Устанавливаю Pillow...")
    os.system("pip install Pillow")
    from PIL import Image


def compress_images(folder="."):
    folder = Path(folder)
    originals = folder / "originals"
    originals.mkdir(exist_ok=True)

    extensions = {".webp", ".jpeg", ".jpg"}
    files = [f for f in folder.iterdir() if f.suffix.lower() in extensions]

    if not files:
        print("Фотографии не найдены в папке:", folder.resolve())
        return

    print(f"Найдено файлов: {len(files)}\n")

    total_before = 0
    total_after = 0

    for file in files:
        size_before = file.stat().st_size

        # Сохраняем оригинал
        shutil.copy2(file, originals / file.name)

        try:
            img = Image.open(file)

            # Конвертируем RGBA -> RGB если нужно (для jpeg)
            if img.mode in ("RGBA", "P") and file.suffix.lower() in (".jpeg", ".jpg"):
                img = img.convert("RGB")

            # Сохраняем с качеством 75
            if file.suffix.lower() == ".webp":
                img.save(file, "WEBP", quality=75, method=6)
            else:
                img.save(file, "JPEG", quality=75, optimize=True)

            size_after = file.stat().st_size
            saved = size_before - size_after
            percent = (saved / size_before * 100) if size_before > 0 else 0

            total_before += size_before
            total_after += size_after

            print(f"✓ {file.name:<35} {size_before//1024:>5}KB → {size_after//1024:>5}KB  (-{percent:.0f}%)")

        except Exception as e:
            print(f"✗ Ошибка с {file.name}: {e}")

    print(f"\n{'='*60}")
    print(f"Итого: {total_before//1024}KB → {total_after//1024}KB  (сэкономлено {(total_before-total_after)//1024}KB)")
    print(f"Оригиналы сохранены в папке: originals/")


if __name__ == "__main__":
    import sys
    folder = sys.argv[1] if len(sys.argv) > 1 else "."
    compress_images(folder)