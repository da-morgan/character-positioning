function countLetters(string){

  var letterArray = string.split('');
  var objectToReturn = {};

  for(var i = 0; i < letterArray.length; i++){

    if(letterArray[i].match(/\w/)){
      if(!objectToReturn[letterArray[i]]){
        objectToReturn[letterArray[i]] = [];
        objectToReturn[letterArray[i]].push(i);
      } else {
        objectToReturn[letterArray[i]].push(i);
      }
    }

  }

  return objectToReturn;
}

console.log(countLetters('hello hello!!!'));