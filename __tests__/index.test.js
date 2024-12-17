import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
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
  const expected = readFile('expectedResultStylish.txt');
  expect(received).toEqual(expected);
});
test('Comparison check format for YAML', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');
  const received = gendiff(file1, file2);
  const expected = readFile('expectedResultStylish.txt');
  expect(received).toEqual(expected);
});
test('Gendiff plain Json', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');
  const received = gendiff(file1, file2, 'plain');
  const expected = readFile('expectedResultPlain.txt');
  expect(received).toEqual(expected);
});