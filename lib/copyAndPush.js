const copyAndPush = (array, number) => {
  const newArray = [...array];
  newArray.push(number);
  return newArray;
};

module.exports = { copyAndPush };
