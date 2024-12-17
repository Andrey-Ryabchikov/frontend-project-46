const format = (data, formatter = 'stylish') => {
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