function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') return '';

  let result = [];

  set.forEach(value => {
    if (value.startsWith(startString)) {
      const substring = value.replace(startString, '');
      if (substring) {
        result.push(substring);
      }
    }
  });

  return result.join('-');
}

export default cleanSet;
