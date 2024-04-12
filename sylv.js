const prompt = require ("prompt-sync")();
function multiplication(){
    const num = parseInt(
        prompt ("Enter the multiplication table you want:")
    );
    for(let i=0; i<=12; i++){
        let timetable = num*i;
        console.log(`${num} x ${i} = ${timetable}`)
    }
    }
    // multiplication()


    /**get their name, email, phone number using prompt-sync.....chaii */


    const prompting = require ("prompt-sync")();
    function userDetails(){
        const name = prompt ("Hello, this is Siri, what is your name?");
        if(`${name}` === `${name}`){
          console.log("Hello", `${name}`, "nice to meet you")
        }
    } 
    userDetails()
 

    const promp = require ("prompt-sync")();
    function useDetails(){
        const emailNum = prompt ("I'll need your email and phone number to enable you get notifications and important messages fastly and also easily get access to certain applications");
        const email = prompt ("Your email please: ");
        const phoneNo = prompt ("Your Phone number :")
        if(`${email} === ${email} && ${phoneNo} === ${phoneNo}`){
            console.log("Great!. Your email is", `${email}`, "and your phone Number is", `${phoneNo}`)
        }
    }
useDetails()

const prompted = require ("prompt-sync")();
function userDetail(){
    const message = prompt("Do you know your email password is also safe with me?")
    const mssg = prompt ("If you backup your password to Siri, you can always retrieve it in cases of opening an account")
    const click = prompt ("Do you wish to backup your password?")
    const clik = ["YES" , "NO"]
    if(click === "YES"){
        console.log ("Awesome choice. let's proceed.......")
    }else{
        console.log ("Okay, You can always choose to back this up")
    }
}
userDetail()

function useDetail(){
    const promptee =  require("prompt-sync")()
    const end = prompt("It's very nice to meet you.")
    const endin = prompt ("You can gradualy check out my functionalities.")
    const ending = prompt ("I am Siri, always here if you need me.")
    const ended = prompt ("Have a greeaat day ahead!.")
}
useDetail()
    


