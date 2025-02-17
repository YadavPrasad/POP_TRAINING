//ES -> ECMA Script

// 1. function
function testFunction() {
    console.log("This is test Function");
}

testFunction();

//2.Arrow Function

var testArrowFunction = () => {
    console.log("This is test arrow function");
}

testArrowFunction();

//3.Scoping function

var a = 10;
console.log(a);

{
    let b = 20;
    console.log(b);
    let a = 30;
    console.log(a);
    var c = 40;
    console.log(40);
    console.log(a);
    d = 50;
}
console.log(c);
console.log(a);
console.log(d);

//4.Ternary operator
a = 10 
console.log((a % 2) ? "Odd" : "Even");

//5.Spread Operator (...)
stud1year = ["user1", "user2", "user3"] 
stud2year = ["user4", "user5", "user6"] 
stud3year = ["user7", "user8", "user9"] 
stud4year = ["user10", "user11", "user12"] 
studDB = [...stud1year,...stud2year,...stud3year,...stud4year]
console.log(studDB);
alumniDB = stud4year;
console.log(alumniDB);

//6. Rest Operator (...)
function studentDB(...studDataBase) {
    console.log(studDataBase);
}
studentDB(studDB)

//7. Destructing Operator
var array = [10, 20, 30, 40, 50]
var[a, b, c, d, e, f] = array
console.log(a, b, f);

//8.Function Hoisting

sayHello(); // This works because of hoisting

function sayHello() {
  console.log("Hello!");
}

class ClassEg{
    classFun = () => {
        console.log("Hi there !!!");
    }
}

object = new ClassEg();
console.log(object.classFun());

//9.class and objects
//class -> blueprint of a objects [eg : apartments]
