// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if it a basic value should just turn it into a string
  if(typeof(obj) === 'boolean' || typeof(obj) === 'number' || obj === null ){
    return String(obj);
  }
  //if undefined function or symbol should return null
  if(typeof(obj) === 'undefined' || typeof(obj) === 'function'){
    return null;
  }
  if(typeof(obj) === 'string'){
    return '"' + obj + '"';
  }
  if(Array.isArray(obj)){
    return '[' + obj.map(element => stringifyJSON(element)) + ']';
  }
  if(Object.keys(obj).length < 1){
    return '{}';
  }

  let stringed = '{'
  let leftToItterate = Object.keys(obj).length;

  for(let key in obj){
    if(typeof(obj[key]) === 'function' || typeof(obj[key]) === 'undefined'){
      leftToItterate--;
    }
    else if(leftToItterate > 1){
      stringed +=  stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      leftToItterate--;
    } else {
      stringed += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    }
  }
    return stringed + '}';
} ;
