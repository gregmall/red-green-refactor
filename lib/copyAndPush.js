const copyAndPush = (array, number) => {
  const newArray = array.slice();
  newArray.push(number);
  return newArray;
};

module.exports = { copyAndPush };
