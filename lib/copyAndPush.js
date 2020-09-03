function copyAndPush(array, number){
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.push(array[i]);

  }
  newArray.push(number);
  
  return newArray;
}
module.exports = { copyAndPush };
