let family = {
    incomes: [3000, 5000, 1200, 1200, 85.50, 222.22, 210.10],
    expenses: [300, 60, 120.50, 800.28, 110.10, 120.22, 99.99, 11210.20]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const calculateBalanceTotal = calculateIncomes - calculateExpenses

    if (calculateBalanceTotal > 0) {
        const messageBalance = `Family total incomes is R$${calculateIncomes} and family total expenses is R$${calculateExpenses}. Family total balance is R$${calculateBalanceTotal.toFixed(2)}, that's means family total balance is positive.`
        console.log(messageBalance)
    } else if (calculateBalanceTotal < 0) {
        const messageBalance = `Family total incomes is R$${calculateIncomes} and family total expenses is R$${calculateExpenses}. Family total balance is R$${calculateBalanceTotal.toFixed(2)}, that's means family total balance is negative.`
        console.log(messageBalance)
    } else {
        const messageBalance = `Family total incomes is R$${calculateIncomes} and family total expenses is R$${calculateExpenses}. Family total balance is R$${calculateBalanceTotal.toFixed(2)}, that's means family total balance is neutral.`
        console.log(messageBalance)   
    }
}

calculateBalance()