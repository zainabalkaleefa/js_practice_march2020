function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city === "Manchester") { return true;}
  else return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return (Math.ceil(people/40));
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let numOfSheep=0;
  arr.forEach(function (array){
    if(array==="sheep") {numOfSheep++;}
  });
  return numOfSheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let postCod = person.address.postCode.toString();
  if (postCod[0]==="M" && person.address.city === "Manchester") {return true;}
  else return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
