function add(number){
let input = document.getElementById('inp');
input.value += number;
}
function clearInputFeild() {
    let inputFeild  = document.getElementById('inp');
    inputFeild.value = ' '; 
}
function calculate() {
    let inputResult = document.getElementById('inp');
    inputResult.value =eval(inputResult.value);
}