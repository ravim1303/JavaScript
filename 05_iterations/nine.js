/// reduce explore from mdn
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)      ///   accumerator ko 0 milega first me then currVal (arr ka elmnt ) + karke acc ko update karte rhega 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)     /// smart approach h likhne ka 

console.log(myTotal);


const shoppingCart = [     /// array ke under three objects h {},{},{} , object ke value access karne ke liye item likan padta h 
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)    /// object se access karne ke liye item.price hoga 

console.log(priceToPay);
