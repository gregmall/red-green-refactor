const { fetchQuote } = require('./fetchQuote');

describe('fetchQuote function', () => {

  it('returns a single quote from the futurama api', () => {

    expect(fetchQuote())
      .toEqual(expect.any(Object));

      


});


});