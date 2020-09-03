const fetch = require('node-fetch');
const fetchQuote = () => {
  fetch('http://futuramaapi.herokuapp.com/api/quotes');
  return {};
};
module.exports = { fetchQuote };