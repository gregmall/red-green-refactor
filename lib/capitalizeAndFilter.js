const capitalizeAndFilter = array => {
    
    
  const capitalArray = [];
  
  for(let i = 0; i < array.length; i ++){
    if(array[i].charAt(0) === 'f'){
      array.slice(array[i]);
    } else {
      let cap =  array[i].toUpperCase();
      capitalArray.push(cap);
    }
  }
  return capitalArray;
};

module.exports = { capitalizeAndFilter };
