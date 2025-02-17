//Conditional Statement
//Looping statement

array = [10,20,30];
for (i of array) {
    console.log(i);
}

object1 = {
    "firstname" : "St. Joseph",
    "lastname" : "Institute of Technology",
    "depts" : ["CSE", "IT", "ADS", "ECE"],
    "training" : "MERN"
}

for([key, value] of Object.entries(object1)) {
    console.log(key, value);
}


var testArrowFunction = () => {
    console.log("This is test arrow function");
}

testArrowFunction();

function testFunction() {
    console.log(object);
}

testFunction();

