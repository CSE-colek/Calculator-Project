const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = "";

function appendToDisplay(value){
    currentInput += value;
    display.value = currentInput
}



function calculate(){
    try {
        currentInput = eval(currentInput).toString();
    display.value = currentInput
    } catch(error){
        display.value = "Error";
        currentInput = "";
    }
    
}
function clearDisplay(){
    currentInput = "";
    display.value = "";
}




buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value === 'C') {
            clearDisplay();  
        } else if (value === '=') {
            calculate();  
        } else {
            appendToDisplay(value);  
        }
    });
});