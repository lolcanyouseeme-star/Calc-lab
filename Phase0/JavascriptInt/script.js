console.log("javascript init")

let numOne=parseInt(prompt("enter your first number"))
let numTwo=parseInt(prompt("enter your second number"))
console.log("javascript init")

console.log("Misa")
//addNumbers()

function addNumber(){
    console.log(numOne + numTwo)
}
//function invoking

//anonymous function
const subtraction = function(){
    console.log(numOne - numTwo)
}
//fatarrow function
const multiply=()=>console.log(numOne*numTwo)
multiply()