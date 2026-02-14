let counterElement = document.getElementById("counterValue");

function onDecrement(){
    let previousCounterValue  = parseInt(counterElement.textContent);
    let updatedCounterValue = previousCounterValue  - 1;
    counterElement.textContent = updatedCounterValue;
    if(updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
        else if(updatedCounterValue > 0){
            counterElement.style.color = "black";
        }
        else{
            counterElement.style.color = "black";
        }
}
function onReset(){
     updatedCounterValue =  0;
     counterElement.textContent = updatedCounterValue;
    counterElement.style.color = "black";

}
 function onIncrement(){
 let previousCounterValue  = parseInt(counterElement.textContent);
    let updatedCounterValue = previousCounterValue  +1;
    counterElement.textContent = updatedCounterValue;
     if(updatedCounterValue < 0){
        counterElement.style.color = "red";
    }
        else if(updatedCounterValue > 0){
            counterElement.style.color = "Green";
        }
        else{
            counterElement.style.color = "black";
        }
 }
