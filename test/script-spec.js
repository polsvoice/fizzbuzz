var expect = require('chai').expect;

describe('FizzBuzz', function(){
    var fizzBuzz = require('../fizzbuzz.js');
    it('should exist', function(){
        expect(fizzBuzz).to.not.be.undefined;
    });

    it('should print "Fizz"', function(){
        expect(fizzBuzz(3)).to.equal('Fizz');
    });
});


