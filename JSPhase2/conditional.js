//Conditional statements are either true or false. The backtick is a string that allows you embed variables in your statement.
//IF, ELSE & ELSE IF
let gender = "Male"
if( gender !== "Male"){
   console.log ("Please Welcome")
} else{
    console.log("Please Try Again")
}

let name= "Esther"
let email = "esther@gmail.com"
let password = "iamesthe"
if(name === "Esther" && email ==="esther@gmail.com" && password === "iamesther"){
   console.log(`Welcome! ${name}, your email "${email}" and your password "${password}" is correct`)
}else if (name === "Esther" || email === "esther@gmail.com" || password === "iamesther") {
    console.log (`Welcome at least of them matches, your name is ${name} and your email is ${email} your password is also ${password}`)
}else if (name === "Esther" && email !== "esther@gmail.com" && password ==="iamesther"){
    console.log (`Sorry, your email is not correct`)
}else if (name === "Esther" && email === "esther@gmail.com" && password !== "iamesther"){
    console.log("Your password is incorrect")
}
 else{
    console.log ("Wrong Input")
}
console.log();
let num1 = 3;
let num2 = -7;
let num3 = 2
if(num1 >0 && num2<0 && num3 > 0){
    console.log("-")
}else if (num1 > 0 && num2 <0 && num3 > 0){
    console.log ("+")
}else{
    console.log ("any sign")
}

console.log();

//CLASSWORK
/**Given an array of numbers holding the scores of set08 students after taking JavScript test, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
 * assign grades to the students.
 * grade "A" when the student scores 80-100
 * grade "B" when the student scores 60-70
 * grade "C" when the student scores 50-59
 * grade "D" when the student scores 40-49
 * grade "E" when the student scores 30-39
 * grade "F" when the student scores 0-25
 */
let bbb = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]



//MODULUS gives you the remainder after the division have beenmade. it checks for remainders. the sign is a percentage sign
console.log (5%2)
console.log(4%2)
let even = [1, 2, 3, 4, 5, 6, ,7, 8, 9]
let adding = even.reduce((acc, cur)=>{
    return acc+cur
})%2
console.log(adding);

let names = "Ewuzie Joan"
let age = 16
let status = "alive and dead"
if( names === "Ewuzie Joan" && age ===16 && status === "alive in God"){
   message = `Hello ${names}, you are ${16} and ${status}`
}else if(names === "Ewuzie Joan" && status === "alive in God"){
    message = "You barely made it"
} else if(names === "Ewuzie Joan" && status !=="alive in God"){
    message = "YOU ARE A THIEF!!"
}
else{
    message = "Not welcome here"
}
console.log(message);



let drome = ["civic"]
function check(el){
    let checking = el.toString().split("").reverse().join("")
    
    if (drome === checking) {
        console.log ("Yes")
    } else {
        console.log("No")
    }
        return checking

}
console.log(check(drome));