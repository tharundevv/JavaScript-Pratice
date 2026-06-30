let a = "Tarun";
{
    let b = "Tharun";
    console.log(a)
    console.log(b)
}
console.log(a)
// console.log(b) //This is getting reference error because of block scope


var Name = 'Rahul';

{
    var Name_1='Raghul';
    console.log(Name)
    console.log(Name_1)
    
}
console.log(Name)
console.log(Name_1) //this is getting output because of var is function scope