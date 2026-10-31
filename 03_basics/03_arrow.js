const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()  ///  hitesh  welcome to website
// user.username = "sam"   /// updated
// user.welcomeMessage()   /// sam welcome to website

// console.log(this);      /// showing the all feature of the this keyword

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()    /// output undefined bcz this keyword use 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()    // output - {}  empty

// const addTwo = (num1, num2) => {
//     return num1 + num2     /// explicit  if you use return    
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   /// emplicit if not use return

const addTwo = (num1, num2) => ({username: "hitesh"}) /// how to return object this way


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
