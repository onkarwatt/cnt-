let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');

incrementBtn.addEventListener('click', () => {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener('click', () => {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
});
