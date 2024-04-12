//iterate through all numbers from 1 to 45. Print the following
/**
 * For multiples of 3, print "Fizz"
 * For multiples of 5, print "Buzz"
 *  For multiples of 3 & 5, print "FizzBuzz"
 */

function fizzer(el){
    for(let i = 0; i <= el; i++){
        if (i % 3 === 0){
            console.log (i, "Fizz")
        }
    }return el
}
console.log(fizzer(45));
console.log();
console.log();


function buzzer(el){
    for (let i = 0; i <= 45; i++){
        if(i %5 === 0){
            console.log(i, "Buzz")
        }
    } return el
}
console.log (buzzer(45))
console.log();

function fizzBuzzer(el){
    for (let i = 0; i <=45; i++){
        if(i %3 === 0 && i %5 === 0){
            console.log ( i, "FizzBuzz")
        }
    }return el
}
console.log (fizzBuzzer(45))
let message = 2
    for(let q=0; q<4; q++){
        message = message *2
        console.log(message);        

    }


    res=1
    for(let i=0; i<=1; i++){
        res = res * 5;
        console.log(res,"myy")
    }
