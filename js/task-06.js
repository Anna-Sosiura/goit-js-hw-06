const textInput = document.querySelector("#validation-input");


textInput.addEventListener("blur", inputFunction);
function inputFunction (event) {
    const inputLength=event.target.value.length;
const dataLength=textInput.getAttribute('data-length');
console.log(inputLength);
console.log(dataLength);
if (inputLength==dataLength){
    console.log('valid');
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
} else
{   console.log('invalid');
    textInput.classList.add('invalid');
textInput.classList.remove('valid');
}}
// console.log(inputLength);
// console.log(dataLength);
