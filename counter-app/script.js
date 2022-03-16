let count = 0;
let countEl = document.getElementById("count-element");

let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let entry = count + " - ";
    saveEl.textContent += entry;
    count = 0;
    countEl.textContent = 0;
}

function reset() {
    count = 0;
    countEl.textContent = 0;
    saveEl.textContent = "Previous entries: ";
}