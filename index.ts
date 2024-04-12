// console.log ("Running!!")

// let myName:string = "Joan"

// let add:string | number = "Ewuzie" + 16
// console.log(add);

// //declaring ANY datatype
// const anyOne: any = true + "8" + 7
// console.log(anyOne);


// //declaring UNDEFINED datatype
// let notKnown:undefined;


// //declaring NULL datatype
// let nothing:null = null


// //declaring ARRAY datatype
// let arr : (boolean | string | number | null)[]= ["Esther", true, 19, null, "Mrs"]
// arr[2] = 80;
// arr[4] = "Miss"
// console.log(arr);



// //TUPLE METHOD follows a certain syntax, sequence based on how you set it. It is still under an array
// let userDetails:[string , number , boolean] = ["Joan", 17, false]
// console.log(userDetails)


// //OBJECTS
// let personDetails : {
//     name: string,
//     age: number,
//     isFemale: boolean,
//     isTall: boolean,
//     wealth:null | string
// } = {
//     name: "Daniel",
//     age: 91,
//     isFemale: true,
//     isTall: false,
//     wealth:null
// }

// personDetails.wealth = "small"
// personDetails.name = "Pablo"
// personDetails.age = 34

// console.log(personDetails)

// /**CLASSWORK
//  * Write an object of a student information in SS2 that takes in name, age, class, subjects (not less than four subjects) and score
//  *  (let the score take in four values)
//  */

// let studentInfo:{
//     name : string
//     age : number,
//     subjects: string[]
//     score: number[]
// } = {
//     name : "Emmanuel",
//     age : 16,
//     subjects: ["Mathematics", "English", "Econs", "Accounting", "Civic"],
//     score: [25, 50, 70, 80, 100]
// }
// console.log(studentInfo)


// //TYPES 
// type typeone = {
//     name : string
//     class: string
//     age: number
//     isFemale ?: boolean
// }

// type typetwo = {
//     isTall : boolean
//     status : string
// }
// let person:typeone | typetwo = {
//     name : "Esther",
//     class: "set 08",
//     age:45,
//     isFemale:true,
//     isTall: false,
//     status: "married"

// }
// console.log(person);


// let person2:typeone & typetwo = {
//     name : "Esther",
//     class: "set 08",
//     age:45,
//     isFemale:true,
//     isTall: false,
//     status: "married"

// }
// console.log(person2);



// //INTERFACES
// interface parent {
//     firstName : string
//     lastName : string
//     isWorking? : boolean
//     height : number
// }

// interface newParent extends parent{
//     voice? : string
//     firstName : string
//     student? : boolean
// }

// let Joan = {
//     firstName :"Joan",
//     lastName : "Ewuzie",
//     height : 6.2,
//     voice :"tiny"
// }

// Joan.firstName = "Esther",
// Joan.lastName = "Ogbu",
// Joan.height = 5.9,
// Joan.voice ="small"

// console.log(Joan)
// ;



/**ASSIGNMENT
 * In an array of objects, 
 * A. Prepare the data of 10 set08 students following: regNum, name, courses they take, set, gender, organisations (either sheCode or brocode),
 * favourite Course, list of projects they have worked on.
 * B. Get the list of females from that array.
 * C. Get the names of the students under broCodes
 * D. Get the students whose favourite courses are JavaScript
 *E. Get the total sum of all courses a particular student takes 
 *F. Sort the array and let the last regNum be the first.
 Write A written in 40 leaves....the ten students.
 */

interface typesOf {
    regNum : number
    name : string
    courses : string[]
    set : string
    gender : string
    organisation: string
    favCourse : string
    projects : string[]
}

 let students: typesOf[] = [
    {
        regNum: 52,
        name: "Regina Chiori",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Female",
        organisation: "sheCode",
        favCourse: "HTML/CSS",
        projects: ["Twitter", "YouTube", "LinkedIn"]

    },
    {
        regNum: 50,
        name: "Wisdom Peters",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Male",
        organisation: "broCode",
        favCourse: "JavaScript",
        projects: ["Facebook", "YouTube", "LinkedIn"]

    },
    {
        regNum: 51,
        name: "Ewuzie Joan",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Female",
        organisation: "sheCode",
        favCourse: "JavaScript",
        projects: ["Twitter", "GoRide", "Boomplay"]

    },
    {
        regNum: 53,
        name: "Ogunyemi Ayo",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Male",
        organisation: "broCode",
        favCourse: "JavaScript",
        projects: ["Boomplay", "Facebook", "Instagram"]

    },
    {
        regNum: 55,
        name: "Jessica Felix",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Female",
        organisation: "sheCode",
        favCourse: "Transformational Leadership",
        projects: ["Boomplay", "Twitter", "Facebook"]

    },
    {
        regNum: 54,
        name: "Prince John",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Male",
        organisation: "broCode",
        favCourse: "JavaScript",
        projects: ["LinkedIn", "YouTube", "AjorBeta"]

    },
    {
        regNum: 57,
        name: "Favour Sunday",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Female",
        organisation: "sheCode",
        favCourse: "HTML/CSS",
        projects: ["AjorBeta", "Facebook", "LinkedIn"]

    },
    {
        regNum: 56,
        name: " Etang Sean",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Male",
        organisation: "broCode",
        favCourse: "JavaScript",
        projects: ["Gokada", "Boomplay", "Twitter"]

    },
    {
        regNum: 59,
        name: "Eronmonsele Daniel",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Male",
        organisation: "broCode",
        favCourse: "Design Thinking",
        projects: ["GoRide", "YouTube", "Twitter"]

    },
    {
        regNum: 58,
        name: "Akwubo Zion",
        courses:["HTML/CSS", "JavaScript", "Design Thinking", "UI/UX", "Transformational Leadership"],
        set: "08",
        gender: "Male",
        organisation: "broCode",
        favCourse: "HTML/CSS",
        projects: ["Facebook", "Domino's", "Instagram"]

    },
    
 ]


//Get the list of females from that array.
let fem = students.filter((el)=>{
    return el.gender === "Female"
})
console.log (fem);

// C. Get the names of the students under broCodes
let broCodes = students.map((el)=>{
    if(el.organisation==="broCode"){
    return el.name
    }
})
console.log (broCodes)

//Get the students whose favourite courses are JavaScript
let favorite = students.filter((el)=>{
    return el.favCourse === "JavaScript"
})
console.log(favorite);

//Get the total sum of all courses a particular student takes 
let total = students.map((el)=>{
    if(el.name==="Regina Chiori"){
    return el.courses.length
    }
})
console.log(total);

//Sort the array and let the last regNum be the first.
let sortArray = students.sort((x,y)=> {
    return y.regNum -x.regNum
}
)
console.log(sortArray);
