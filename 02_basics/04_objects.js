// const tinderUser = new Object()     /// ye singleton object declearation h
const tinderUser = {}     // ye leteral object declearation h - define - tinderUser is object 

// inside the object keys and values define 
tinderUser.id = "123abc"        
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// another way to define the object 
const regularUser = {
    email: "some@gmail.com",
    fullname: {           /// nested object here  like fullname, userfullname
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //not way to combine the objects
// const obj3 = Object.assign({}, obj1, obj2, obj4)    // way to combine objects

const obj3 = {...obj1, ...obj2}    // way to combine objects  mostly uses in this way for combine of objects 
// console.log(obj3);

/// multiple objects come from the databse in array form [{..},{...}]
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);   // tinderUser ke sare object(key & values ) print ho jayega

// console.log(Object.keys(tinderUser));    // only keys print in array[]  of the object tinderUser
// console.log(Object.values(tinderUser));    // values only
// console.log(Object.entries(tinderUser));    // both but in array inside the array [ [..],[..] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // false


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  // object access ka tarika h dot and [""]

const {courseInstructor: instructor} = course  /// object ka destructering kiya ja rha h call instructor instead of couseInstructor is tarah se curly braces dikha to samjh jana kiya ja rha h   

// console.log(courseInstructor);   // couseInstructor ko call karne ka sort tarika h usko ek instructor nam de diya 
console.log(instructor);

////   json ke format me object h object ke form me 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//// json ke format me object h  array ke form me 
[
    {},
    {},
    {}
]

