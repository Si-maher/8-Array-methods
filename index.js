const items =[

    {name:'Bike', price: 100},
        {name:'Tv', price: 200},
        {name:'Album', price: 10},
        {name:'Book', price: 5},
        {name:'Phone', price: 500},
        {name:'Computer', price: 1000},
        {name:'Keyboard', price: 25}
]

// 1) Filter 

const filteredItems = items.filter((item) => {
    return item.price <= 100
})
console.log(items);
console.log(filteredItems);

// Filter method does not alter the original array 

// 2) Map 

const mapItems = items.map((item) => {
    // return item.name
    return item.price
})
console.log(mapItems);
// console.log(mapItems);

// 3) Find 

const findItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(findItem);

// 4) ForEach 

items.forEach((item) => {
    
    console.log(item.price);
})

// 5) Some 

const sumOfItem = items.some((item) => {
    return item.price <= 100
})
console.log(sumOfItem);

// Returns true or false 

// 6) Every 

const everyItem =items.every ((item) => {
    return item.price <=50
})

console.log(everyItem);

// Similar to 'some' but 'every' checks all items to see if the condition is true or false 

// 7)Reduce 

const reduceItem = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
},0)

console.log(reduceItem);

// Reduce needs a starting counter, in this case 0. It then subsequently adds each price to the total there after.

// 8) Includes 

const numbers = [1,2,3,4,5]

const includesNum = numbers.includes(9)

console.log(includesNum);

// Checks to see if value is included within the Array. Returns true or false 