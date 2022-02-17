function getInputValue(id) {
    const input = document.getElementById(id + '-input');
    const inputValue = parseFloat(input.value);
    return inputValue;
}
function getInnerText(id) {
    const text = document.getElementById(id);
    const innerText = text.innerText;
    return innerText;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    //     const foodInput = document.getElementById('food-input');
    //     const rentInput = document.getElementById('rent-input');
    //     const clothesInput = document.getElementById('clothes-input');
    //     const totalExpenses = document.getElementById('total-expenses');
    //     const income = document.getElementById('income-input');
    //     const incomeValue = parseFloat(income.value);
    //     const balance = document.getElementById('balance');
    //     const totalExpensesAmount = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
    //     const balanceAmount = parseFloat(income.value) - totalExpensesAmount;
    //     if (isNaN(foodInput.value) || isNaN(rentInput.value) || isNaN(clothesInput.value) || isNaN(incomeValue)) {
    //         alert('please insert a number');
    //     }
    //     else if (foodInput.value < 0 || rentInput.value < 0 || clothesInput.value < 0 || incomeValue < 0) {
    //         alert('input a valid amount');
    //     }
    //     else if (incomeValue < totalExpensesAmount) {
    //         alert('your income is low than the amount you want to expend');
    //     }
    //     else {
    //         totalExpenses.innerText = totalExpensesAmount;
    //         balance.innerText = balanceAmount;
    //     }

    const foodInputValue = getInputValue('food');
    const rentInputValue = getInputValue('rent');
    const clothesInputValue = getInputValue('clothes');
    const incomeInputValue = getInputValue('income');
    const balance = document.getElementById('balance');
    const text = document.getElementById('total-expenses');
    const totalExpenses = foodInputValue + rentInputValue + clothesInputValue;

    if (isNaN(foodInputValue) || isNaN(rentInputValue) || isNaN(clothesInputValue) || isNaN(incomeInputValue)) {
        alert('Please input number in all input-field');
    }
    else if (foodInputValue < 0 || rentInputValue < 0 || clothesInputValue < 0 || incomeInputValue < 0) {
        alert('please input a valid amount in all input-field');
    }
    else if (totalExpenses > incomeInputValue) {
        alert('Your income is less than the amount you want to spend');
    }
    else {
        text.innerText = totalExpenses;
        balance.innerText = incomeInputValue - totalExpenses;
    }
})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveInputValue = getInputValue('save');
    const saving = document.getElementById('saving-amount');
    const incomeInputValue = getInputValue('income');
    const savingAmount = incomeInputValue * saveInputValue / 100;
    const balance = document.getElementById('balance');
    const remainingBalance = document.getElementById('remaining-balance');
    if (isNaN(saveInputValue)) {
        alert('please input number');
    }
    else if (saveInputValue < 0) {
        alert('please input a valid percentage');
    }
    else if (savingAmount > balance.innerText) {
        alert('Your balance is less than the percentage you want to save from your income');
    }
    else if (incomeInputValue < 0) {
        alert('Your income is not a valid amount,please input a valid amount in income-input-field');
    }
    else if (isNaN(incomeInputValue)) {
        alert('Your income is not a not a number,please input number in income-input-field');
    }
    else {
        saving.innerText = savingAmount;
        remainingBalance.innerText = parseFloat(balance.innerText) - savingAmount;
    }
})
