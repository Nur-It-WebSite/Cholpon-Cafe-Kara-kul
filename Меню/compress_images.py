"""
Скрипт для сжатия фотографий для GitHub Pages.
Сжимает .webp, .jpeg/.jpg (и опционально .png) файлы с балансом качества (по умолчанию 75).
Сохраняет оригиналы в папку originals/ внутри указанной папки или с сохранением структуры при рекурсии.
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


def _should_process(file_path, extensions, root_originals):
    if not file_path.is_file():
        return False
    if file_path.suffix.lower() not in extensions:
        return False
    if root_originals in file_path.parts:
        return False
    return True


def _save_original(file_path, root_folder, root_originals):
    rel_parent = file_path.parent.relative_to(root_folder)
    target_dir = root_originals / rel_parent
    target_dir.mkdir(parents=True, exist_ok=True)
    shutil.copy2(file_path, target_dir / file_path.name)


def _compress_file(file_path, quality):
    img = Image.open(file_path)
    suffix = file_path.suffix.lower()
    if suffix in (".jpeg", ".jpg") and img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    if suffix == ".webp":
        img.save(file_path, "WEBP", quality=quality, method=6)
    elif suffix in (".jpeg", ".jpg"):
        img.save(file_path, "JPEG", quality=quality, optimize=True)
    elif suffix == ".png":
        img.save(file_path, "PNG", optimize=True)
    else:
        raise ValueError(f"Неподдерживаемый формат: {suffix}")


def compress_images(folder='.', quality=75, recursive=False, include_png=False):
    folder = Path(folder)
    if not folder.exists() or not folder.is_dir():
        raise FileNotFoundError(f"Папка не найдена: {folder}")

    root_originals = folder / 'originals'
    root_originals.mkdir(exist_ok=True)

    extensions = {'.webp', '.jpeg', '.jpg'}
    if include_png:
        extensions.add('.png')

    if recursive:
        iterator = folder.rglob('*')
    else:
        iterator = folder.iterdir()

    files = [f for f in iterator if _should_process(f, extensions, 'originals')]

    if not files:
        print('Фотографии не найдены в папке:', folder.resolve())
        return

    print(f'Найдено файлов: {len(files)} (quality={quality}, recursive={recursive}, include_png={include_png})\n')

    total_before = 0
    total_after = 0

    for file_path in files:
        size_before = file_path.stat().st_size
        _save_original(file_path, folder, root_originals)

        try:
            _compress_file(file_path, quality)
            size_after = file_path.stat().st_size
            saved = size_before - size_after
            percent = (saved / size_before * 100) if size_before > 0 else 0

            total_before += size_before
            total_after += size_after

            print(f"✓ {file_path.relative_to(folder)} {size_before//1024:>5}KB → {size_after//1024:>5}KB  (-{percent:.0f}%)")
        except Exception as e:
            print(f"✗ Ошибка с {file_path.relative_to(folder)}: {e}")

    print(f"\n{'='*60}")
    saved_total = (total_before-total_after)//1024
    print(f"Итого: {total_before//1024}KB → {total_after//1024}KB  (сэкономлено {saved_total}KB)")
    print(f"Оригиналы сохранены в папке: {root_originals}")


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Сжатие изображений в папке')
    parser.add_argument('folder', nargs='?', default='.', help='Папка с изображениями')
    parser.add_argument('-q', '--quality', type=int, default=75, help='Качество JPEG/WebP (10-95)')
    parser.add_argument('-r', '--recursive', action='store_true', help='Обход папок рекурсивно')
    parser.add_argument('--png', action='store_true', help='Включать PNG файлы (опционально)')

    args = parser.parse_args()

    if args.quality < 10 or args.quality > 95:
        raise ValueError('quality должен быть в диапазоне 10..95')

    compress_images(folder=args.folder, quality=args.quality, recursive=args.recursive, include_png=args.png)
