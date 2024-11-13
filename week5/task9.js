//example 9
let business = {
    name: "Kampala Electronics",
    location: "Kampala",
    products: [
    { name: "TV", price: 1000000, quantity: 50 },
    { name: "Radio", price: 150000, quantity: 200 },
    { name: "Laptop", price: 3000000, quantity: 30 }
    ],
    calculateTotalValue: function() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
    total += this.products[i].price *
    this.products[i].quantity;
    }
    return total;
    }
    };
    console.log(`Total value of products in stock: UGX
    ${business.calculateTotalValue()}`);

//let marketvendor = {
    name:"john",
    location; "kampala market",
    products;{
    products: {
        bananas: {
            price: 1000,
            quatity; 50
        },
        oranges: {
            price: 1500,
            quatity; 50
        },
        apples: {
            price: 2000,
            quatity; 50
        },
        //method to calculate total revenue
        calculatetotalrevenue: function() {
            let totalrevenue = 0;
            for(let product in this.products) {
                totalrevenue += this.products[product].price * this.products[product].quatity;
            }
            return totalrevenue;
        }
    }
        bananas:{
            price: 1000,
            quatity; 50
        },
        oranges:{
            price:1500,
            quatity; 50
        },
        apples:{
            price: 2000,
            quatity; 50
        }
        //method to calculate total revenue
        calculatetotalrevenue: function(){
            let totalrevenue = 0;
            for(letproduct in this.products){
                totalrevenue += this.products[product].price * this.products[product].quatity;
            }:
            return totalrevenue;
        }
    };
//calculating and logging the total revenue
let totalrevenue = marketvendor.calculatetotalrevenue();
console.log(`total revenue for all products in stock is UGX ${totalrevenue}`);

