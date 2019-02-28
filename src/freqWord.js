function freqWord(array) {
  return array
    .reduce((acc, cur, ind, arr) => {
      if (arr.indexOf(cur) === ind) {
        return [...acc, [cur, 1]];
      } else {
        acc[acc.indexOf(acc.find(e => e[0] === cur))] = [
          cur,
          acc[acc.indexOf(acc.find(e => e[0] === cur))][1] + 1
        ];
        return acc;
      }
    }, [])
    .sort((a, b) => b[1] - a[1])
    .filter((cur, ind, arr) => cur[1] === arr[0][1])
    .map(cur => cur[0])[0];
}

function mostFreqWord(array) {
  var hash = {};
  for (var i = 0; i < array.length; i++) {
    if (hash[array[i]]) {
      hash[array[i]] += 1;
    } else {
      hash[array[i]] = 1;
    }
  }
  let maxvalue = 0;
  let maxstring = "";
  Object.keys(hash).forEach(function(key) {
    if (hash[key] > maxvalue) {
      maxvalue = hash[key], maxstring = key;
    }
  });
  return maxstring;
}
