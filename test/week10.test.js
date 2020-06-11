const {
    sumDigits,
    createRange,
    hexToRGB
  } = require("../challenges/week10");


///////////////////////////////////////   sumDigits /////////////////////////////////////////
  describe("sumDigits", () => {

    test("Return an error when n is a string/ undefined/ boolean", () => {
        expect(() => {sumDigits("foo");}).toThrow("A number n is required");
        expect(() => {sumDigits(Boolean);}).toThrow("A number n is required");
        expect(() => {sumDigits();}).toThrow("n is required");  
    });

    test("Return the sum of all digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(123456789)).toBe(45);
    });
  });

  /////////////////////////////////////   createRange   /////////////////////////////////////////
  describe("createRange", () => {

    test("Return start/end is required when start/end is undefined", () => {
        expect(() => {createRange(undefined,10,2);}).toThrow("start is required");
        expect(() => {createRange(0,undefined,2);}).toThrow("end is required"); 
    });

    test("Return an array begin with start number to end number with gap step", () => {
        expect(createRange(0,10,2)).toEqual([0,2,4,6,8,10]);
        expect(createRange(0,10,1)).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
        expect(createRange(1,7,3)).toEqual([1,4,7]);
        expect(createRange(1,9,5)).toEqual([1,6]);
        
    });
    test("Return an array begin with start number to end number by 1 default step without prividing the step", () => {
        expect(createRange(2,5, )).toEqual([2,3,4,5]);
        expect(createRange(2,6,undefined )).toEqual([2,3,4,5,6]);
        
    });
});

//////////////////////////////////////////   hexToRGB   /////////////////////////////////////////////

describe("hexToRGB", () => {

    test("Return hexStr is required when hexStr is undefined", () => {
        expect(() => {hexToRGB();}).toThrow("hexStr is required");
    });

    test("Return hexStr should be 6 digits long when hexStr >/< 7 digits ", () => {
        expect(() => {hexToRGB("#FF00000");}).toThrow("hexStr should be 6 digits long");
        expect(() => {hexToRGB("#FF00");}).toThrow("hexStr should be 6 digits long");
    });

    test("Return the rgb colour code from a hexadecimal colour code ", () => {
        expect(hexToRGB("#FF0000")).toEqual("rgb(255,0,0)");
        expect(hexToRGB("#FFD700")).toEqual("rgb(255,215,0)");
        expect(hexToRGB("#0F1604")).toEqual("rgb(15,22,4)");
          
    });

    test("Check the function is case insensitive ", () => {
        expect(hexToRGB("#ff0000")).toEqual("rgb(255,0,0)");
        
    });

});