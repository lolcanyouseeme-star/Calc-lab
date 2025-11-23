const input = document.getElementById('calc-button');
const buttons = document.querySelectorAll('button');
//ID because we have given it an ID on HTML
//This is to select all buttons

//Here is where we will store our result and display in this input
let string = "";
//To access the buttons and loops to attach click ability
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        //Here when you press the button it is supposed to show the value
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        
        else if(e.target.innerHTML == 'C'){
            string = ""
            input.value = string;
        } 

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

//Initialize the history array
const history =[];
//Fucntion to add a calculation to history
function addToHistory(num1, operator, num2, result) {
    //create an object for calculation
    const calculation = {
        operand1: num1,
        operator: operator,
        operand2: num2,
        result: result
    };
    //Add object to the history array
    history.pushState(calculation)
}
//Operation functions
//Addition
function add(a, b) {
    const result = a + b;
    addToHistory(a, '+', b, result);
    return result;
}
//Subtraction
function subtract(a, b) {
    const result = a - b;
    addToHistory(a, '-', b, result);
    return result;
}
//MUltiplication
function multiply(a, b) {
    const result = a * b;
    addToHistory(a, '*', b, result);
    return result;
}
//Division
function divide(a, b) {
    if (b === 0) {
        console.error(errorMsg);
        return errorMsg;
    }
    const result = a / b;
    addToHistory(a, '/', b, result);
    return result;
}

//Function to display history
function displayHistory() {
    console.log("\n---calculation history---");
    if (history.length === 0) {
        console.log("No calculations found");
        return;
    }
    history.forEach((calc, index) => {
        console.log('${index + 1}. ${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}');
    })
    console.log("------\n");
}

console.log("---Calculator Demo---");
