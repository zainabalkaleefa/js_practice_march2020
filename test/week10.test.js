const {
    sumDigits,
    createRange,
    hexToRGB,
    findWinner,
    getScreentimeAlertList
  } = require("../challenges/week10");


///////////////////////////////////////   sumDigits /////////////////////////////////////////
  describe("sumDigits", () => {

    test("Return an error when n is a string/ undefined/ boolean/ negative", () => {
        expect(() => {sumDigits("foo");}).toThrow("An integer number n is required");
        expect(() => {sumDigits(Boolean);}).toThrow("An integer number n is required");
        expect(() => {sumDigits(-123);}).toThrow("An integer number n is required");
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
    test("function work with negative numbers", () => {
        expect(createRange(-10,-2,2)).toEqual([-10,-8,-6,-4,-2]);
        expect(createRange(-5,10,5)).toEqual([-5,0,5,10]);
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

/////////////////////////////////////////////   findWinner   //////////////////////////////////////
describe("findWinner", () => {

    test("Return an error when board is undefined", () => {
        expect(() => {findWinner(undefined);}).toThrow("board is required");
        
    });

    test("Return the winner of the board game", () => {
        expect(findWinner([
            ["0","x","null"],
            ["0","x","0"],
            ["null","x","null"]
        ])).toEqual("x");

        expect(findWinner([
            ["0","x","null"],
            ["0","0","0"],
            ["null","x","null"]
        ])).toEqual("0");
        
    });

    test("Return null if there is not winner", () => {
        expect(findWinner([
            ["0","x","null"],
            ["0","null","0"],
            ["null","x","null"]
        ])).toEqual(null);
    });
  });


  ///////////////////////////////////////   getScreentimeAlertList   ///////////////////////////////////////////

  describe("getScreentimeAlertList", () => {

    test("Return users is required when the users is undefined", () => {
        expect(() => {getScreentimeAlertList(undefined,"2019-05-04");}).toThrow("users is required");
    });
    
    test("Return date is required when the date is undefined", () => {
        expect(() => {getScreentimeAlertList(
            [
                {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                     ]},
                {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                     ]},
            ], );}).toThrow("date is required");
    });


    test("Return the user name who exceed 100 minutes of screen usage ", () => {
        expect(getScreentimeAlertList(
            [
                {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                     ]},
                {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                     ]},
            ],"2019-05-04")).toEqual(["beth_1234"]);

            expect(getScreentimeAlertList(
                [
                    {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                         ]},
                    {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 100, facebook: 0, safari: 31} },
                         ]},
                ],"2019-06-14")).toEqual(["sam_j_1989"]);
               
    });

});