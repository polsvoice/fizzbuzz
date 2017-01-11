var fizzBuzz = function(){
    return {
        printNums: function( startNum, lastNum ){
            var resultArr = []
                , ctr
                , result;
            
            ctr = startNum || 0;
            
            while ( ctr <= lastNum ){
                result = this.testNum( ctr );
                resultArr.push( result );
                ctr++;
            }
            return resultArr;
        },
        testNum: function( num ){
            if ( num === 0 ){
                return num;
            } else if ( !( num % 3 ) && !( num % 5 ) ){
                return "FizzBuzz";
            } else if ( !( num % 3 ) ){
                return "Fizz";
            } else if ( !( num % 5 ) ){
                return "Buzz";
            } else {
                return num;
            }
        },
        init: function(){
            console.log( this.printNums( 0, 100 ) );
        }
    }
}();
fizzBuzz.init();
