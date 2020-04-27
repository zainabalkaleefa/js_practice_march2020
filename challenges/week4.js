function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let arr=[];
  nums.forEach(element => { if(element <1) {arr.push(element);}});
  return arr;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let arr=[];
  names.forEach(element => { if(element.charAt(0) === char) {arr.push(element);}});
  return arr;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let arr=[];
  words.forEach(element => { if(element.indexOf(' ') >= 0) {arr.push(element);}}); // If the element contains a space then push it
  return arr;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let arr=[];
  nums.forEach(element => { if(Number.isInteger(element)) {arr.push(element);}});
  return arr;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let arr=[];
  users.forEach(element => {arr.push(element.data.city.displayName);});
  return arr;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let arr=[];
  nums.forEach(element => { arr.push( Math.round(Math.sqrt(element) * 100) / 100);});
  return arr;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let arr=[];
  sentences.forEach(element => { 
    if (element.toLowerCase().indexOf(str.toLowerCase()) > -1)  {arr.push(element)}});// toLowerCase used to not be case sensitive
  console.log(arr);
  return arr;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let arr=[];
  triangles.forEach(element => {arr.push(Math.max(...element));});
  return arr;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
