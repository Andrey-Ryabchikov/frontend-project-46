#!/usr/bin/env node

import { program } from 'commander';

import gendiff from '../src/Index.js';

gendiff('__fixtures__/file1.json', '__fixtures__/file2.json');

program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
        console.log(gendiff(filepath1, filepath2)); 
    });

program.helpOption('-h, --help', 'output usage information');

program.parse(process.argv);