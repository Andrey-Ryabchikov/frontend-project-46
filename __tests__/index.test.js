import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { expect, test } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['Comparison check default format for JSON', 'file1.json', 'file2.json', undefined, 'expectedResultStylish.txt'],
  ['Comparison check default format for YAML', 'file1.yaml', 'file2.yaml', undefined, 'expectedResultStylish.txt'],
  ['Comparison check format for YAML', 'file1.yaml', 'file2.yaml', undefined, 'expectedResultStylish.txt'],
  ['Gendiff plain YAML', 'file1.yaml', 'file2.yaml', 'plain', 'expectedResultPlain.txt'],
])('%s', (_, file1, file2, format, expectedFile) => {
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);

  const received = gendiff(filePath1, filePath2, format);
  const expected = readFile(expectedFile);
  
  expect(received).toEqual(expected);
});
