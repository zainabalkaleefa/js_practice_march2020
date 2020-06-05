const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");

 ///////////////////// sumMultiples function tests //////////////////////

  describe("sumMultiples", () => {
    test("Return An array is required when it's not an array ", () => {
      expect(sumMultiples("foo")).toEqual("An array is required");
        });

    test("It return the sum of any numbers which are a multiple of 3 or 5 in an array", () => {
      expect(sumMultiples([1, 3, 5])).toBe(8);
      expect(sumMultiples([1, 3, 5, 6, 9, 15, 17])).toBe(38);
      expect(sumMultiples([3])).toBe(3);
      
        });
  
    });


//////////////////// isValidDNA function tests /////////////////////

  describe("isValidDNA", () => {

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



////////////////////// isItPrime function tests //////////////////////

    describe("isItPrime", () => {

      test("Return true if the number is a prime number ", () => {
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(53)).toBe(true);
        expect(isItPrime(12)).toBe(false);
        expect(isItPrime(1409)).toBe(true);
          });

      test("Check an undefined input", () => {
        expect(() => {
          isItPrime();}).toThrow("n is required");
         });

      test("Return an error when n is not a number", () => {
        expect(() => {
          isItPrime("foo");}).toThrow("A number is required");
          });
        expect(() => {
          isItPrime(Boolean);}).toThrow("A number is required");
    });



/////////////////////// getComplementaryDNA function tests ///////////////////

    describe("getComplementaryDNA", () => {

      test("Return an error when str is undefined", () => {
        expect(() => {
          getComplementaryDNA();}).toThrow("A string is required");
        });

      test("Return string with ones' complement T/A C/G ", () => {
        expect(getComplementaryDNA("CAT")).toEqual("GTA");
        expect(getComplementaryDNA("MIRROR")).toEqual("MIRROR"); 
        });

      test("Check the function is working properly with lower case ", () => {
        expect(getComplementaryDNA("glass")).toEqual("CLTSS");
        });
    });


 ////////////////////// createMatrix function tests ///////////////////   
  
    describe("createMatrix", () => {

      test("Return an error when n or fill is undefined", () => {
        expect(() => {
          createMatrix(2,undefined );}).toThrow("A fill is required");
        expect(() => {
          createMatrix(undefined,"foo");}).toThrow("n is required");
        });
        

      test("Return an array of length n with sub array of length n ", () => {
        expect(createMatrix(2,"A")).toEqual([["A","A"], ["A","A"]]);
        expect(createMatrix(3,0)).toEqual([[0,0,0],[0,0,0],[0,0,0]]); 
        expect(createMatrix(4,"foo")).toEqual([["foo","foo","foo","foo"],["foo","foo","foo","foo"],["foo","foo","foo","foo"],["foo","foo","foo","foo"]]); 
        });
    });
  

////////////////////// areWeCoverd function tests ///////////////////

    describe("areWeCovered", () => {
      test("Return an error when staff or day is undefined", () => {
        expect(() => {
          areWeCovered(undefined,"Sunday");}).toThrow("staff is required");

        expect(() => {
          areWeCovered([
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
            ],undefined);}).toThrow("day is required");
      });

      test("Return false when there is no staff ", () => {
        expect(areWeCovered([],"Sunday")).toBe(false);
        expect(areWeCovered([],"Monday")).toBe(false);
        expect(areWeCovered([],"Tuesday")).toBe(false);
        expect(areWeCovered([],"Wednesday")).toBe(false);
        expect(areWeCovered([],"Thursday")).toBe(false);
        expect(areWeCovered([],"Friday")).toBe(false);
        expect(areWeCovered([],"Saturday")).toBe(false);
          });
          
      
      test("Return true when we have at least 3 staff to cover the day ",() => {
        expect(areWeCovered([
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Pedro", rota: [ "Sunday", "Tuesday", "Wednesday"] },
          { name: "Tony", rota: ["Sunday", "Tuesday", "Wednesday"] },
          { name: "John", rota: ["Saturday", "Sunday", "Wednesday"] },
          { name: "Mandy", rota: ["Saturday", "Wednesday"] },
          ],"Sunday")).toBe(true);
      });

      test("Return false when staff is less than 3 to cover the day ",() => {
        expect(areWeCovered([
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Pedro", rota: [ "Sunday", "Tuesday", "Wednesday"] },
          { name: "Tony", rota: ["Sunday", "Tuesday", "Wednesday"] },
          { name: "John", rota: ["Saturday", "Sunday", "Wednesday"] },
          { name: "Mandy", rota: ["Saturday", "Sunday", "Wednesday"] },
          ],"Monday")).toBe(false);
      });
    });


    
         
    
   
  


