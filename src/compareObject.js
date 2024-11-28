const compareObjects = (obj1, obj2) => {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const result = {};

  keys.forEach((key) => {
    if (!Object.hasOwn(obj1, key)) {
      result[`+ ${key}: ${obj2[key]}`] = null;
    } else if (!Object.hasOwn(obj2, key)) {
      result[`- ${key}: ${obj1[key]}`] = null;
    } else if (obj1[key] !== obj2[key]) {
      result[`- ${key}: ${obj1[key]}`] = null;
      result[`+ ${key}: ${obj2[key]}`] = null;
    } else {
      result[key] = obj1[key];
    }
  });

  return result;
};
