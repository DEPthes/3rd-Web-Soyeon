var input = document.getElementById('input');
var result = document.getElementById('result');

function add(char){
   input.value += char;
}

function calculate(){
    result = eval(input.value);
    input.value = result;
}

function allclear(){
    input.value = "";
    result.value = "";
}

function back(){
    input.value = input.value.slice(0, -1);
}
//eventlistener 달기 onclick 말고