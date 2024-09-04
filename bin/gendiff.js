#!/usr/bin/env node

import { program } from 'commander';
const program = new Command();

program
    .description('Compares two configuration files and shows a difference.');
    .version('1.0.0');

program.helpOption('-h, --help', 'output usage information');

program.parse();