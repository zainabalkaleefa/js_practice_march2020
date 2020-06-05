/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (!arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr) === true) { return ("An array is required");}
  let sum=0;
  for (let i=0;i<arr.length;i++){
    if(arr[i]%5 ===0 || arr[i]%3 ===0) {sum+=arr[i];}
  }
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== "string") throw new Error("str is required");
  let STR= str.toUpperCase();
  if (STR.includes("C") || STR.includes("G")===true || STR.includes("T")===true || STR.includes("A")===true) return true;
  else return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
   if (str === undefined) throw new Error("A string is required");
  let arr= str.toUpperCase().split("");
  let a =[];
  arr.map( m => {
    if (m === "A") a.push(m.replace("A","T"));
    else if (m === "T") a.push(m.replace("T","A"));
    else if (m === "G") a.push(m.replace("G","C"));
    else if (m === "C") a.push(m.replace("C","G"));
    else a.push(m);
  });
  return a.join('');
}

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (isNaN(n)) throw new Error("A number is required");
  for (let i=2; i<n ; i++){
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("A fill is required");
  let a=[];
  for (let i=0;i<n;i++){
    a.push(new Array(n).fill(fill)) ;
    }
  return a;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if(staff.length===0) return false;
  let n=0;
  staff.map( obj => {
    if (obj.rota.includes(day)) n++;
  });
  if (n>2) return true;
  else return false;

}

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
