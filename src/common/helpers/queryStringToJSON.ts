export const queryStringToJSON = (qs: string) => {
  const pairs = qs.split('&');

  const result = {};

  pairs.forEach(function (p) {
    const pair = p.split('=');
    const key = pair[0];
    const value = decodeURIComponent(pair[1] || '');

    if (result[key]) {
      if (Object.prototype.toString.call(result[key]) === '[object Array]') {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  });

  return JSON.parse(JSON.stringify(result));
};
