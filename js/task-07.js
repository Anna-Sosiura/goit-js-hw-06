const inputSize = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");
console.log(inputSize);
console.log(fontSize);

inputSize.addEventListener('input', inputFunction)
function inputFunction(event){
    const valueSize=(event.target.value);
    fontSize.style.fontSize=`${valueSize}px`;
}