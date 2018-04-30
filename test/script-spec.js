describe("FizzBuzz", function(){
    it("prints 1", function(){
        expect(fizzBuzz.testNum(1)).toEqual(1);
    });
    it("prints 'Fizz'", function(){
        expect(fizzBuzz.testNum(3)).toEqual("Fizz");
    });
    it("prints 'Buzz'", function(){
        expect(fizzBuzz.testNum(5)).toEqual("Buzz");
    });
    it("prints 'Fizz' for 6", function(){
        expect(fizzBuzz.testNum(6)).toEqual("Fizz");
    });
    it("prints 'Fizz' for 9", function(){
        expect(fizzBuzz.testNum(9)).toEqual("Fizz");
    });
    it("prints 'Buzz' for 10", function(){
        expect(fizzBuzz.testNum(10)).toEqual("Buzz");
    });
    it("prints 'FizzBuzz' for 15", function(){
        expect(fizzBuzz.testNum(15)).toEqual("FizzBuzz");
    });
    it("prints 'FizzBuzz' for 30", function(){
        expect(fizzBuzz.testNum(30)).toEqual("FizzBuzz");
    });
} );
