var currentNumberWraper = document.getElementById('currentNumber');
var incButton = document.getElementsByName('adicionar')[0];
var decButton = document.getElementsByName('subtrair')[0];
var currentNumber = 0;

incButton.addEventListener("click", increment)
decButton.addEventListener("click", decrement)

function disabledButton(){
    if(currentNumber >= 10){
        incButton.setAttribute("disabled", "disabled");
    } else{
        incButton.removeAttribute("disabled", "false");
    }
    if(currentNumber <= -10){
        decButton.setAttribute("disabled", "disabled");
    } else{
        decButton.removeAttribute("disabled", "false");
    }
}


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWraper.innerHTML = currentNumber
    if(currentNumber >= 0){
        currentNumberWraper.style.color = 'white';
    }
    disabledButton()
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWraper.innerHTML = currentNumber
    if(currentNumber < 0){
        currentNumberWraper.style.color = 'red';
    } else{
        currentNumberWraper.style.color = 'white';
    }
    disabledButton()
}

