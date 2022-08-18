var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate)
var txtInput = document.querySelector("#txt-input");


function clickEventHandler(){
    console.log("clicked!!")
    console.log(txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler )