var expect = require('chai').expect;

describe('FizzBuzz', function(){
    var fizzBuzz = require('../fizzbuzz.js');
    it('should exist', function(){
        expect(fizzBuzz).to.not.be.undefined;
    });

    it('should print "Fizz"', function(){
        expect(fizzBuzz(3)).to.equal('Fizz');
        expect(fizzBuzz(6)).to.equal('Fizz');
    });
    
    it('should print "Buzz"', function(){
        expect(fizzBuzz(5)).to.equal('Buzz');
        expect(fizzBuzz(10)).to.equal('Buzz');
    });
    
    it('should print "FizzBuzz"', function(){
        expect(fizzBuzz(15)).to.equal('FizzBuzz');
        expect(fizzBuzz(30)).to.equal('FizzBuzz');
    });
});


