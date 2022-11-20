/* \d */

const codeInput = document.getElementById("code-input");
const sendButton = document.getElementById("send-btn");

codeInput.addEventListener("focus", ()=> {codeInput.setAttribute("placeholder", "")});
codeInput.addEventListener("blur", ()=> {codeInput.setAttribute("placeholder", "*****")});
