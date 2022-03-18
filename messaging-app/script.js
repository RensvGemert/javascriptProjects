let isEmpty = true;

let messageEl = document.getElementById("messages-el");
let textboxEl = document.getElementById("textbox-el")
let buttonEl = document.getElementById("button-el")

textboxEl.addEventListener("keypress", function(event){
    let newMessage = document.createElement("li");
        if (event.keyCode === 13 && textboxEl.value != "") {   
            newMessage.textContent = textboxEl.value;
            messageEl.appendChild(newMessage);
            buttonEl.click();
            textboxEl.value = "";
        }
});