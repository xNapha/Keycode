//on key down return key pressed and relevent keycode

const key = document.querySelector("#key");
const num = document.getElementById("num");
const enter = document.querySelector(".enter");
const keyCode = document.querySelector("#keyCode");
document.addEventListener("keydown",(e)=>{
    switch(e.key){
        case " ":
            key.textContent = "Space"
            break;
        default:
            key.textContent= e.key;
    }
    enter.textContent = "";
    keyCode.classList.add("border")
    num.textContent = e.keyCode;});


