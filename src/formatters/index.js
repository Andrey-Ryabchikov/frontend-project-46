import stylish from './stylish.js';
import plain from './plain.js';
import jsonFormat from './jsonFormat.js'; // Импорт новой функции форматтера

const format = (data, formatter) => {
  switch (formatter) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return jsonFormat(data);
    default:
      throw new Error(`Unsupported format type: '${formatter}'. Supported formats are: 'stylish', 'plain', 'json'.`);
  }
};

export default format;