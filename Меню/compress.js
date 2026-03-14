const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const QUALITY = 75; // 0-100, можешь менять
const folder = __dirname;

const files = fs.readdirSync(folder).filter(f => f.endsWith('.webp'));

if (files.length === 0) {
  console.log('WebP файлы не найдены');
  process.exit();
}

console.log(`Найдено файлов: ${files.length}\n`);

let totalBefore = 0;
let totalAfter = 0;

(async () => {
  for (const file of files) {
    const inputPath = path.join(folder, file);
    const tmpPath = inputPath + '.tmp';

    const sizeBefore = fs.statSync(inputPath).size;
    totalBefore += sizeBefore;

    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(tmpPath);

    const sizeAfter = fs.statSync(tmpPath).size;

    // Заменяем только если стало меньше
    if (sizeAfter < sizeBefore) {
      fs.renameSync(tmpPath, inputPath);
      totalAfter += sizeAfter;
      const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
      console.log(`✓ ${file}: ${(sizeBefore/1024).toFixed(1)}KB → ${(sizeAfter/1024).toFixed(1)}KB (-${saved}%)`);
    } else {
      fs.unlinkSync(tmpPath);
      totalAfter += sizeBefore;
      console.log(`~ ${file}: пропущен (уже оптимален)`);
    }
  }

  const saved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`\n✅ Итого: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB (сэкономлено ${saved}%)`);
})();