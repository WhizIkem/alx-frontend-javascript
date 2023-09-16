function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') return '';

  let result = [];

  for (let item of set) {
    if (item.startsWith(startString)) {
      const substring = item.slice(startString.length);
      if (substring) {
        result.push(substring);
      }
    }
  }

  return result.join('-');
}

export default cleanSet;
