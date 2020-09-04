const capitalizeAndFilter = array => {
    
    
  const capitalArray = [];
  
  array.forEach(element => {
      
    if(element.charAt(0) === 'f'){
      array.slice(element);
    } else {
      const cap =  element.toUpperCase();
      capitalArray.push(cap);
    }
  
  });
  return capitalArray;
};

module.exports = { capitalizeAndFilter };
