//Number 2
// Write a function calculateProfit that accepts the selling price, cost price, and numbernof  units sold, and return the profit for a small business selling product like maize flour

// Number 2
// Write a function calculateProfit that accepts the selling price, cost price, and numbernof  units sold, and return the profit for a small business selling product like maize flour
let sellingPrice = 10000;
let costPrice = 15000;
let numUnitsSold = 17;
function calculateProfit(sellingPrice, costPrice, numUnitsSold) {
    let profit = sellingPrice - costPrice;
    let profitPercentage = (profit / costPrice) * 100;
    return `Profit: ${profit}, Profit Percentage: ${profitPercentage.toFixed(2)}%`;
}


 console.log(calculateProfit(sellingPrice, costPrice, numUnitsSold));