//Primitive
let studentName = "Tharun";
console.log(studentName)

let age = 22;
console.log(age)

let isPassed = true;
console.log(isPassed)

let address;
console.log(address)

let phoneNumber = null;
console.log(phoneNumber)

let largeNumber = 12345678901234567890n;
console.log(largeNumber)


let uniqueId = Symbol("student");
console.log(uniqueId)

//Reference DataType

//Object
let student={
    name:'rahul',
    age:25,
    course:'JavaScript'

}
console.log(student)
console.log(student.name)
console.log(student.age)

student.age=23;

console.log(student.age)

//Array
let fruits=['Apple','Banana','Orange'];

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])

fruits.push("Mango")
console.log(fruits)

//Functions

function greet(){
    console.log("Hello")
}
greet();

let sayHi=function(){
    console.log("Hi")
}
sayHi();

let person1 = {
    name: "Rahul"
};

let person2 = person1;

person2.name = "Tharun";

console.log(person1.name);
console.log(typeof person2.name);

//TypeOff

let name = "Rahul";

console.log(typeof name);

let age2 = 25;

console.log(typeof age2);

let isStudent = true;

console.log(typeof isStudent);

let future;

console.log(typeof future);

let value = null;

console.log(typeof value);

// let fruits = ["Apple", "Banana"];

console.log(typeof fruits);

// function greet() {
//     console.log("Hello");
// }

console.log(typeof greet);

// _________________________________________
let city;

console.log(city);

let city1 = null;

console.log(city);

// _____________________________________________

console.log(null == undefined);
console.log(null === undefined);


//Type Conversion (implicit)

let result1 = "5" + 2;

console.log(result1);

let result2 = "5" - 2;

console.log(result2);

console.log(false + 5);
console.log(null + 1);

console.log(undefined + 1);

//Type Conversion (Explicit)


let age11= "25";
console.log(Number(age11));

let marks = 95;

console.log(String(marks));

console.log(Boolean(1));
console.log(Boolean(0));

