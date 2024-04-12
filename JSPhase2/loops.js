//LOOPS is used to execute a specificblock of code multiple times without having to do it over and over again 
// The for Loop takes in three parameters (the initial, condition , increament or decreament) allows you execute a specific line of code repeatedly until the specified condition is met
//0-8

// //increament
// for (let i=0 ; i <=8; i++){
//     console.log (i)
// }
// //decreament
// for (let i=8; i >=0; i--){
//     console.log (i)
// }





// /**Classwork, iterate from 0-15
//  * A: perform the decreament loop
//  * B: when it gets to 2, it should break
//  */

// for (let i=15; i >=0; i--){
//     console.log(i);
//     if(i===2){
//         // console.log(i);
//         break;
//     }
// }

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// for (let x=0; x <=arr.length; x++){
//     console.log("this is x", x)
//     console.log("this is arrX",arr[x]);
// }

// /**write out a javascript loop that prits out even numbers in a given array if the array starts from 0 and ends at 10*/
// let arr2 = [0, 1, 2, 3, 4, 5, 6, ,7 ,8, 9, 10]
// for (let i = 0; i <=arr2.length; i++){
//     // console.log (arr2[i])
//     if(arr2[i]%2 === 0){
// console.log ("this is arr2", arr2[i])
//     }
// }

// let arr3 = ["Rice", "Beans", "Yam"]
// for(let i=0; i<=arr3.length; i++){
//     console.log(arr3[i]);
// }

// //while
// let i = 0
// while(i <=10){
//     i++
//     console.log("this is within the while loop",i);
// }
// console.log("this is outside the loop", i)


// //*ASSIGNEMNT
// // Write a jS code to find the power of a number using for loop

// const findPower = (number,exponent)=>{
//     let power = 1
//     for(i = 0; i<exponent;i++){
//         power = number * power;
//     }
//     console.log("power",power);
// }
// findPower( 10,2)

// //OR 

// let expPower = 2;
// let base = 24
// let result =1
// for (let i = 0; i <= base; i++){
//     result = result * expPower;
//     console.log ("second method", result)
// }

// //or 

// function finder(base, power){
//     let result = 1
//     for(let i = result; i<power; i++){
//     console.log (i) 
//     console.log (result *= base)
//     console.log("result", result);
//     }
// }
// finder(10,2)


// //print the numbers from 12 to 24
// for(let i=12; i <= 24; i++ ){
//     console.log(i)
// }
// function powers(start, stop){
//     for (let i=start; i<= stop; i++){
//         console.log (i)
//     }
// }
// powers(12, 24)

// //print the odd numbers from 7 to 31
// for(let i=7; i<=31; i++){
//     if((i)%2 === 1){
//     console.log("odd numbers", i)%3 === 0;
//     }
// }



    let based = 5;
    let exponent = 2;
    function find (based, exponent){
        let result = 1
        for (let i = result; i <based; i++){
            // console.log(i);
            result = result *exponent;
            console.log("my result", result);
        }
    }


let expPower = 2;
let base = 10
let result =1
for (let i = 0; i <= base; i++){
    result = result * expPower;
    console.log ("second method", result)
}

let power = 2
let bass = 10
let returned = 1
for(let i=returned; i<=power; i++){
    console.log("ret",returned);
    returned= returned *base
    console.log(returned);

}
let bas = 10;
let pwer= 2
let rtn= 1
function func(bas, pwer){
    for(let i = rtn; i<=pwer; i++){
        
        rtn= rtn *bas
        console.log(rtn);
    }

}
func(5,2)