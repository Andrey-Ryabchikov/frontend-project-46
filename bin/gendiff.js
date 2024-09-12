#!/usr/bin/env node

import { program } from 'commander';

import gendiff from '../src/parser.js';

gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')

program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format'); 

program.helpOption('-h, --help', 'output usage information');

program.parse();