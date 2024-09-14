import fs from 'fs';
import path from 'path';
import parse from './parser.js';

// Резолв пути относительно текущей рабочей директории, а не bin
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);

const gendiff = (filepath1, filepath2) => {
  // Корректно резолвим путь к файлам относительно рабочей директории
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);

  const data1 = fs.readFileSync(fullPath1, 'utf-8'); // читаем файл1
  const data2 = fs.readFileSync(fullPath2, 'utf-8'); // читаем файл2

  const parsedData1 = parse(data1, extractFormat(filepath1)); // парсим файл1
  const parsedData2 = parse(data2, extractFormat(filepath2)); // парсим файл2

  // Вывод данных для тестирования
  return {
    file1: parsedData1,
    file2: parsedData2
  };
};

export default gendiff;