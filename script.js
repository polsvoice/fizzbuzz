
var fizzBuzz = function(){
    return {
        testNum: function(num){
            if (!(num % 3) && !(num % 5)){
                return "FizzBuzz";
            }
            else if (!(num % 3)){
                return "Fizz";
            } else if (!(num % 5)){
                return "Buzz";
            } else {
                return num;
            }
        },
        init: function(){
            for (i = 1; i <= 100; i++){
                console.log(this.testNum(i));
            }
        }
    }
}();
fizzBuzz.init();
