var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate)
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector(".txt-output")


function clickEventHandler(){
    console.log("clicked!!")
    console.log(txtInput.value)
    txtOutput.innerHTML = txtInput.value
}

btnTranslate.addEventListener("click", clickEventHandler )