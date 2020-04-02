function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  return (word.charAt(0).toUpperCase()+ word.slice(1));
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  let initName= firstName.charAt(0).toUpperCase() + "."+ lastName.charAt(0).toUpperCase() ;
  return initName;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let total= originalPrice + (vatRate*originalPrice/100);
  return (Math.round(total*1e2)/ 1e2);   // round at most 2 decimal places, but only if necessary

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let total =originalPrice - (originalPrice*reduction/100);
  return Math.round(total*1e2)/1e2;   //// round at most 2 decimal places, but only if nece
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (str.length%2===0) { return (str.slice(str.length/2-1,str.length/2+1));}
  else { return (str.slice((str.length-1)/2,(str.length+1)/2));}

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let reversed = "";    
  for (var i = word.length - 1; i >= 0; i--){        
    reversed += word[i];
  }    
  return reversed;
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let w=[];
  words.forEach(function (word){
    w.push(word.split("").reverse().join(""));
  
  });
  return w;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let num=0;
  users.forEach(function (user){
if(user.type==="Linux") { num++;}
  });
  return num;

}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let add=0;
  for (let i=0; i<scores.length;i++)
  {
    add+=scores[i];
  }
 
  return (Math.round(add/scores.length*1e2)/ 1e2); // round at most 2 decimal places, but only if necessary
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (n%3===0 && n%5===0) { return "fizzbuzz";}
  else if (n%5===0) {return "buzz";}
  else if (n%3===0){ return "fizz";}
  else if (n%3!=0 || n%5!=0) { return n;}
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
