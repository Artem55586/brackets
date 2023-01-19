module.exports = function check(str, bracketsConfig) {
  // your solution
  let newString = '';
  let concurrence = false;
  
  transformation: for (let i = 0; i < str.length; i++) {
    for (let n = 0; n < bracketsConfig.length; n++) {
      if (str[i] === bracketsConfig[n][0] && str[i + 1] === bracketsConfig[n][1]) {
        newString = str.slice(0, i) + str.slice(i + 2);      
        concurrence = true;
        break transformation;
      } else {
        newString = str;
      }
    }
  }    

  if (concurrence === true && newString.length > 0) {
    return check(newString, bracketsConfig);
  } else {
    if (newString.length === 0) {
      return true;
    } else {
      return false;
    }
  }  
}