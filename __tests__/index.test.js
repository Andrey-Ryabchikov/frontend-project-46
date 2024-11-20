import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';
import { join } from 'path';
import { expect, test } from '@jest/globals';
import gendiff from '../src/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('Comparison check default format for JSON', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  const received = gendiff(file1, file2);
  const expected = readFile('expectedResultStylish.txt');

  expect(received).toEqual(expected);
});

test('Comparison check default format for YAML', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');

  const received = gendiff(file1, file2);
  const expected = readFile('expectedResultStylish.txt'); // Используйте тот же ожидаемый результат, если формат вывода не зависит от типа файла

  expect(received).toEqual(expected);
});