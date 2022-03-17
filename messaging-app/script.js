let messages = [
    "Hello!",
    "How are you?",
    "All good. Been working on this array project",
    "Same here!",
    "Great!"
];

let messageEl = document.getElementById("messages-el");


for (let i = 0; i < messages.length; i++) {
    messageEl.textContent += messages[i] + " ";
}

