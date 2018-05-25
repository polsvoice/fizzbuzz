var expect = require('chai').expect;

describe('FizzBuzz', function(){
    it('should exist', function(){
        var fizzBuzz = require('../fizzbuzz.js');
    });
    it('should print "Fizz"', function(){
        expect(fizzBuzz.evalNum(3)).to.equal('Fizz');
    });
});
