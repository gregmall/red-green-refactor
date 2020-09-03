const copyAndPush = (array, number) => {
  const newArray = [...array, number];
  return newArray;
};

module.exports = { copyAndPush };
