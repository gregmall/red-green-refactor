const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush function', () => {  
  it('returns a new array with all items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newArray = copyAndPush(numbers, 4);
    
    expect(newArray)
      .toEqual([1, 2, 3, 4]);
    expect(numbers)
      .toEqual([1, 2, 3]);

    

  });
});
