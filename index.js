const calorieCounter = document.getElementById("calorie-counter");
let budgetNumberInput = document.getElementById("budget");
let entryDropdown = document.getElementById("entry-dropdown");
let addEntryButton = document.getElementById("add-entry");
let clearButton = document.getElementById("clear");
let output = document.getElementById("output");
let isError = false;
let cleanInputString = function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

// FUNCTIONS //

let isInvalidInput = function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry() {
    let targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    let entryNumber = ((targetInputContainer.querySelectorAll('input[type="text"]').length) + 1);
    let HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name"> Entry ${entryNumber} Name </label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">
    `;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);

};


function getCaloriesFromInputs(list) {

    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        let invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert(`Invalid Input:${invalidInputMatch[0]}`);
        }
    }
}

// EVENTS //

addEntryDropdown.addEventListener('click', addEntry);


