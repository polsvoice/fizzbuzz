module.exports = function(num){
    if (!(num % 3) && !(num % 5)) return "FizzBuzz";
    if (!(num % 3)) return "Fizz";
    if (!(num % 5)) return "Buzz";
}
