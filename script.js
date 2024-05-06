const display = document.getElementById("display");
function appendToDisplay(input){
display.value += input;
} 

function clearDisplay(){
display.value = "";
}

function calcullate(){
display.value = eval(display.value);
}