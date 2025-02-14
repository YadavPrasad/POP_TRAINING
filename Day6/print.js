console.log("Hello World");

/*Declaring variables */

// a = 10;
// b = "abc";
// c = true;
// console.log(a,b,c);

// primmitive or primary Datatypes
var a = 10.54334
let b = "abc"
const c = true
console.log(a,b,c);

console.log(typeof(a), typeof(b), typeof(c));

/*Objects*/

//1st type of object declaration
object1 = {
    "firstname" : "St. Joseph",
    "lastname" : "Institute of Technology",
    "depts" : ["CSE", "IT", "ADS", "ECE"],
    "training" : "MERN"
}

console.log(object1);
console.log(object1.depts);
console.log(object1["training"]);

//2nd type of object declaration
object2 = {}
object2["firstname"] = "hello"
object2["lastname"] = "SJIT"
object2["training"] = ["Git", "HTML", "CSS", "JS", "MERN", "React", "Express", "MongoDB", "Hosting"] //now it will display line by line 

console.log(object2);

//3rd type of object declaration
object3 = new Object();
object3["firstname"] = "hi";
object3["lastname"] = "SJIT";

console.log(object3);

/* set */

set = new Set(["hello"])
console.log(set);
set.add("Hello")
console.log(set);


