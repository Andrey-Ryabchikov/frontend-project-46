import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { expect, test } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

// Тесты с использованием test.each
describe('Comparison checks', () => {
  test.each([
    ['file1.json', 'file2.json', 'expectedResultStylish.txt'], // для JSON
    ['file1.yaml', 'file2.yaml', 'expectedResultStylish.txt'], // для YAML
  ])('Comparison check for %s and %s with default format', (file1, file2, expectedResultFile) => {
    const received = gendiff(getFixturePath(file1), getFixturePath(file2));
    const expected = readFile(expectedResultFile);
    expect(received).toEqual(expected);
  });

  test.each([
    ['file1.yaml', 'file2.yaml', 'expectedResultPlain.txt'], // для plain-формата
  ])('Gendiff plain Json for %s and %s', (file1, file2, expectedResultFile) => {
    const received = gendiff(getFixturePath(file1), getFixturePath(file2), 'plain');
    const expected = readFile(expectedResultFile);
    expect(received).toEqual(expected);
  });
});
