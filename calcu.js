var display= document.getElementById("display");
     var input = "";

function displaynum(number){
    input += number;
    displayinput();
}
function operations(operators){
    input += '' + operators + '';
    displayinput();
}
function displaydeci(decimal){
    input += decimal;
    displayinput();
}
function percent(){
    input /= 100;
    displayinput();
}
function delete1(){
    input = input.slice(0,-1);
    displayinput();
}
function clear1(){
    input = '';
    displayinput();
}
function total(){
    input = eval(input);
    displayinput();
}
function displayinput(){
    display.value = input;
}