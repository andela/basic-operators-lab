'use strict';

describe('Operators: ', function () {

  beforeEach(function () {

  });

  afterEach(function () {

  });

  describe('About "sumOfNaturalNumbers"', function () {

    it('should return "21" for "6"', function () {
      expect(sumOfNaturalNumbers(6)).toBe(21);
    });

    it('should return "5050" for "100"', function () {
      expect(sumOfNaturalNumbers(100)).toBe(5050);
    });

    it('should use the argument supplied', function () {
      expect(/return\s{1}.+number.+\+/.test(sumOfNaturalNumbers.toString())).toBe(true);
    });

  });

  describe('About "modulusAndSum"', function () {

    it('should return "6" for "6, 3"', function () {
      expect(modulusAndSum(6, 3)).toBe(6);
    });

    it('should return "51" for "50, 7"', function () {
      expect(modulusAndSum(50, 7)).toBe(51);
    });

    it('should use the arguments supplied', function () {
      expect(/return\s{1}firstArg.+\+.+\%\s{1}secondArg/.test(modulusAndSum.toString())).toBe(true);
    });

  });

  describe('About "logicalAnd"', function () {

    it('should return "false" for "1, 2, 3"', function () {
      expect(logicalAnd(1, 2, 3)).toBe(false);
    });

    it('should return "true" for "3, 4, 2"', function () {
      expect(logicalAnd(3, 4, 2)).toBe(true);
    });

    it('should use the arguments supplied', function () {
      expect(/return\s{1}firstArg.+\<.+\&\&.+\s{1}thirdArg/.test(logicalAnd.toString())).toBe(true);
    });

  });

  describe('About "showStringLength"', function () {

    it('should return "Character 6 is: ," for "Hello, World"', function () {
      expect(charAtHalfLength("Hello, World")).toEqual("Character 6 is: ,");
    });

    it('should return "Character 13 is: l" for "Psychological Interference"', function () {
      expect(charAtHalfLength("Psychological Interference")).toEqual("Character 13 is: l");
    });

    it('should use the arguments supplied', function () {
      expect(/string\.length/.test(charAtHalfLength.toString())).toBe(true);
    });

  });

});