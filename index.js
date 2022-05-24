// variable to hook into button
var subButton = document.getElementById('sub-button');
var budget;
var budgetP = document.querySelector('p');

// code to be run on button press - it displays user's starting budget and stores the value in budget variable.

function getBudget() {
    var startingBudget = document.getElementById('nameField').value;
    budget = Math.floor(startingBudget);
    document.querySelector('p').innerHTML = "Your budget is $" + budget;
}

//button listener
subButton.addEventListener('click', getBudget);