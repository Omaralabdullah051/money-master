function getInputValue(id) {
  const input = document.getElementById(id + "-input");
  const inputValue = parseFloat(input.value);
  return inputValue;
}

function getInnerText(id) {
  const text = document.getElementById(id);
  const amount = parseFloat(text.innerText);
  return amount;
}

// add event handler on calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
  const foodInputValue = getInputValue("food");
  const rentInputValue = getInputValue("rent");
  const clothesInputValue = getInputValue("clothes");
  const incomeInputValue = getInputValue("income");
  const balance = document.getElementById("balance");
  const text = document.getElementById("total-expenses");
  const totalExpenses = foodInputValue + rentInputValue + clothesInputValue;
  if (
    isNaN(foodInputValue) ||
    isNaN(rentInputValue) ||
    isNaN(clothesInputValue) ||
    isNaN(incomeInputValue)
  ) {
    alert("Please input number in all input-field");
  } else if (
    foodInputValue < 0 ||
    rentInputValue < 0 ||
    clothesInputValue < 0 ||
    incomeInputValue < 0
  ) {
    alert("please input a valid amount in all input-field");
  } else if (totalExpenses > incomeInputValue) {
    alert("Your income is less than the amount you want to spend");
  } else {
    text.innerText = totalExpenses;
    balance.innerText = incomeInputValue - totalExpenses;
  }
});

// add event handler on save button
document.getElementById("save-btn").addEventListener("click", function () {
  const saveInputValue = getInputValue("save");
  const saving = document.getElementById("saving-amount");
  const incomeInputValue = getInputValue("income");
  const savingAmount = (incomeInputValue * saveInputValue) / 100;
  const remainingBalance = document.getElementById("remaining-balance");
  if (isNaN(saveInputValue)) {
    alert("please input number");
  } else if (saveInputValue < 0) {
    alert("please input a valid percentage");
  } else if (savingAmount > getInnerText("balance")) {
    alert(
      "Your balance is less than the percentage you want to save from your income"
    );
  } else if (incomeInputValue < 0) {
    alert(
      "Your income is not a valid amount, please input a valid amount in income-input-field"
    );
  } else if (isNaN(incomeInputValue)) {
    alert(
      "Your income is not a number, please input number in income-input-field"
    );
  } else {
    saving.innerText = savingAmount;
    remainingBalance.innerText = getInnerText("balance") - savingAmount;
  }
});
