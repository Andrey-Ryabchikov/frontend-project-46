import yaml from 'js-yaml';

const parse = (file, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(file);

    case 'yaml':
    case 'yml':
      return yaml.load(file);

    default:
      throw new Error(`Unknown format: ${extension}`);
  }
};

export default parse;
