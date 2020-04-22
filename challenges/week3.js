function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
//let num1=[];
let num1=[];
nums.map(n => {num1.push(n*n);})
return num1;
}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let arr=[];
  arr.push(words[0]);
   for (let i=1;i<words.length;i++){
     arr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
  return arr.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let arrayOfSubjects=[];
  for (let i=0; i<people.length;i++){
    if(people[i].subjects.length>0) {arrayOfSubjects.push(people[i].subjects)}
  }
  return (Array.prototype.concat(...arrayOfSubjects)).length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let arrayOfIngredient=[];
  for (let i=0; i<menu.length;i++){
    {arrayOfIngredient.push(menu[i].ingredients)}
  }
  let all= Array.prototype.concat(...arrayOfIngredient);  // sum all the sub arrays in [arrayOfIngredient] into one main array [all]
  for (let i=0; i<all.length; i++){
    if(all[i]===ingredient) return true;
  }
  return false;

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
   let duplicates=[];
   let uniq1= [...new Set(arr1)];   // remove all the duplicated numbers within the array
   let uniq2= [...new Set(arr2)];
  for (let i=0;i<uniq1.length;i++){
    for(let j=0; j<uniq2.length;j++){
      if (uniq1[i]===uniq2[j]) {duplicates.push(uniq1[i]);}
    }
  }
  return duplicates.sort(); 
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

