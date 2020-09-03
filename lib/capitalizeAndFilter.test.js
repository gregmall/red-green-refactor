const { capitalizeAndFilter } = require('./capitalizeAndFilter');



describe('capitalizeAndFilter function', () => {  
  it('takes in an array of strings, capitalize  all strings and filter out any string that starts with the letter f', () => {
    const strings = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const newStrings = capitalizeAndFilter(strings);
    expect(newStrings)
      .toEqual(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'SATURDAY', 'SUNDAY']);


  });
});
