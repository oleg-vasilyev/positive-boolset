module.exports = function getPositiveKeysOfBoolset(boolset) {
  return boolset.filter((item, i, arr) => (i+1)%2 && arr[i+1]);
}
