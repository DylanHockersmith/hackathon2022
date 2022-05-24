// variable to hook into button
var subButton = document.getElementById("sub-button");
var budget;
var budgetP = document.querySelector("h1");

// Form defines

var ourForm = document.getElementById("ourForm");
var ourField = document.getElementById("ourField");
var ourList = document.getElementById("ourList");

// Form functionality

ourForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createItem(ourField.value);
  });

// code to be run on button press - it displays user's starting budget and stores the value in budget variable.

function getBudget() {
  var startingBudget = document.getElementById("nameField").value;
  budget = Math.floor(startingBudget);
  document.querySelector("h1").innerHTML = "Your budget is $" + budget;
}

//button listener
subButton.addEventListener("click", getBudget);



function createItem(x) {
  let dButton = `<li>${x} <button onclick="deleteItem(this)">Remove</button><button onclick="payBill(this, 'grey', 'green')">Pay</button></li>`;
  ourList.insertAdjacentHTML("beforeend", dButton);
  ourField.value = "";
  ourField.focus;
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}

function payBill(element, color, backgroundColor) {
    element.style.color = color;
    element.style.backgroundColor = backgroundColor;
  }