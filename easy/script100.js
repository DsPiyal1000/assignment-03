// Get DOM elements
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const totalDeposit = document.getElementById("total-deposit");
const totalWithdraw = document.getElementById("total-withdraw");
const totalBalance = document.getElementById("total-balance");

// Initialize totals
let depositTotal = 0;
let withdrawTotal = 0;
let balanceTotal = 0;

// Deposit function
depositBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount (positive number).");
        return;
    }

    depositTotal += amount;
    balanceTotal += amount;
    updateTotals();
    amountInput.value = "";
});

// Withdraw function
withdrawBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount (positive number).");
        return;
    }

    if (amount > balanceTotal) {
        alert("Insufficient Balance");
        return;
    }

    withdrawTotal += amount;
    balanceTotal -= amount;
    updateTotals();
    amountInput.value = "";
});

// Update totals in the UI
function updateTotals() {
    totalDeposit.textContent = depositTotal.toFixed(2);
    totalWithdraw.textContent = withdrawTotal.toFixed(2);
    totalBalance.textContent = balanceTotal.toFixed(2);
}