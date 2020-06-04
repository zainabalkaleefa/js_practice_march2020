const {
    sumMultiples,
    isValidDNA
    // getComplementaryDNA,
    // isItPrime,
    // createMatrix,
    // fareWeCovered
  } = require("../challenges/week9");


  describe.only("sumMultiples", () => {

    test("Return An array is required when it's not an array ", () => {
      expect(sumMultiples("foo")).toEqual("An array is required");
        });

    test("It return the sum of any numbers which are a multiple of 3 or 5 in an array", () => {
      expect(sumMultiples([1, 3, 5])).toBe(8);
      expect(sumMultiples([1, 3, 5, 6, 9, 15, 17])).toBe(38);
      expect(sumMultiples([3])).toBe(3);
      
        });
  
    });


    describe.only("isValidDNA", () => {

      test("Return true when the string contains C, G, T or A", () => {
        expect(isValidDNA("CITY")).toBe(true);
        expect(isValidDNA("Window")).toBe(false);
        });

      test("Check the case sensitivity", () => {
        expect(isValidDNA("cat")).toBe(true);
        expect(isValidDNA("door")).toBe(false);
        });

      test("Check other input format like numbers and boolean", () => {
        expect(() => {
          isValidDNA(3);}).toThrow("str is required");
        });
        expect(() => {
          isValidDNA(false);}).toThrow("str is required");
      
    });


