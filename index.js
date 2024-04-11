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

let isInvalidInput = function isInvalidInput (str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

console.log(isInvalidInput("1e3"));

