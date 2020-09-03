const { getName } = require('./getName');

describe('getName function', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    
    const nameProperty = getName(spot);
    expect(nameProperty)
      .toEqual('spot');
  });
});
