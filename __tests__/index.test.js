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
  ['stylish', 'expected-stylish-output.txt'],
  ['plain', 'expected-plain-output.txt'],
  ['json', 'expected-json-output.txt'],
])('gendiff %s', (format) => {
  const result = genDiff('file1.json', 'file2.json', format);
  const expected = readFileSync(pathToExpectedFile(format), 'utf-8');
  expect(result).toBe(expected);
});
