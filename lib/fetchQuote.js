const fetch = require('node-fetch');

const fetchQuote = async() => {
  const api = 'http://futuramaapi.herokuapp.com/api/quotes/1';
  const response = await fetch(api);
  const json = await response.json();
  console.log(json);
  return json;
};
 


module.exports = { fetchQuote };
