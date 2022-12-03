/* \d */

const codeInput = document.getElementById("code-input");
const sendButton = document.getElementById("send-btn");
const backdrop = document.getElementById("backdrop");
const solution = document.getElementById("solution");

codeInput.addEventListener("focus", ()=> {codeInput.setAttribute("placeholder", "")});
codeInput.addEventListener("blur", ()=> {codeInput.setAttribute("placeholder", "*****")});

function codeCheck(){
    if(codeInput.value === "14075"){
        /* replace w message appears */
        backdrop.classList.remove("hidden");
        solution.classList.remove("hidden");
    } else {
        /* replace shake animation */
        alert("Leider falsch")
    }
}

sendButton.addEventListener("click",()=>{
    codeCheck();
});

/* call codeCheck function with enter key */
codeInput.addEventListener('keyup', (event) => {
    const keyName = event.key;
    if (keyName === 'Enter') {
    codeCheck();
    }
});
/* end call codeCheck function with enter key */


