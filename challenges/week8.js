const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  
  for (let i=0; i<nums.length-1;i++){
    if (n===nums[i]) return nums[i+1];}
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const array= str.split('');
  let numberOfZeros=0;
  let numberOfOnces=0;
  for(let i=0; i<array.length;i++){
    if (array[i]==="0"){numberOfZeros++;}
    else numberOfOnces++;
  }
  return { 0:numberOfZeros, 1:numberOfOnces};
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
 
  return parseFloat(n.toString().split('').reverse().join('')) ;    

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let add=0;
  for (let i=0;i<arrs.length;i++){
    add+=arrs[i].reduce((a, b) => a + b, 0);
  }
  return(add);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if(arr.length<2) return arr;
  if(arr.length===2) return ([arr[1],arr[0]]);
  if(arr.length>2){
    let n= arr.length;
    let array = [arr[n-1]];
    for (let i=1;i<arr.length-1;i++) {array.push(arr[i]); }
    array.push(arr[0]);
    return(array);
  }
  
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  const str= Object.values(haystack);
  let i =0;
  str.forEach( item => { 
    if (typeof item === "string" && item.toLowerCase().includes(searchTerm.toLowerCase())=== true){i++;} });
  if (i>0)  return true;
  else return false; 
};


const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let object={};
  let array = str.replace(/[.,!?]/g,"").split(" ");
  array.forEach(text => {
    text = text.toLowerCase();
    if (!object[text]) { object[text]=0;}
    object[text]+=1;
  });
return object;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
