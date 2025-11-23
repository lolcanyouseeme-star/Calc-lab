//ID because we have given it an ID on HTML
let input = document.getElementById('inputBox');
//This is to select all buttons
let buttons = document.querySelectorAll('button');

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