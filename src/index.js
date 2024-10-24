
import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import getDiff from './getDiff.js'
import format from './formatters/index.js'; 



const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);



const gendiff = (filepath1, filepath2, formatName) => {

  const parsedFile1 = getData(getFullPath(filepath1));
  const parsedFile2 = getData(getFullPath(filepath2));


  const diff = getDiff(parsedFile1, parsedFile2);

 
  return format(diff, formatName);
};
  

export default gendiff;