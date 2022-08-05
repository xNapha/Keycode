//on key down return key pressed and relevent keycode

const key = document.querySelector("#key");
const num = document.getElementById("num");
let keyCode = document.addEventListener("keydown",(e)=>{
    if (e.key ==" "){
        key.textContent = "Space"
    } else{
        key.textContent= e.key;
    }
    num.textContent = e.keyCode;});


