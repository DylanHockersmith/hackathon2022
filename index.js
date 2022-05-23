// variable to hook into button
var subButton = document.getElementById('sub-button');


// code to be run on button press

function getBudget() {
    var startingBudget = document.getElementById('nameField').value;
    console.log(startingBudget);
}

//button listener
subButton.addEventListener('click', getBudget);