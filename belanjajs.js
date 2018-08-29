let cart = []

let list = [
    {name: 'Ikan', price: 40000},
    {name: 'Mie', price: 10000},
    {name: 'Ayam', price: 60000},
    {name: 'Susu', price: 10000},
    {name: 'Sayur', price: 5000},
    {name: 'Tahu', price: 5000}
]
let onCart = cart.concat(list)
let total = onCart.length
let total_price = onCart.map(onCart => onCart.price)
console.log(onCart)

const reducer = (accumulator,currentValue) => accumulator + currentValue
console.log("Amoun " + total + " with total price " + total_price.reduce(reducer))
