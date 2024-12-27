import yaml from 'js-yaml';

// const parsers = {
//   json: JSON.parse,
//   yaml: yaml.load,
//   yml: yaml.load,
// };

// export default (data, format) => parsers[format](data);

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
