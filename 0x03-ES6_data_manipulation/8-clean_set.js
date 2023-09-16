function cleanSet(set, startString) {
  if (!startString) return '';

  let result = '';

  set.forEach(value => {
    if (value.startsWith(startString)) {
      result += value.replace(startString, '') + '-';
    }
  });

  return result.slice(0, -1);
}

export default cleanSet;
