// singleton
// Object.create

/* object literals
  Object - (dictonay ke jaisa h ) An object in JavaScript is a standalone entity that stores data as a collection
  of key-value pairs. Unlike primitive data types (like strings or numbers) which store a 
  single value, objects let you group related data and functionality together*/

const mySym = Symbol("key1")


const JsUser = {     /// JsUser is object here 
    name: "Hitesh",     // key and value here
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   /// print Symbol("key1")
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   // access by dot 
// console.log(JsUser["email"])  // access by [] with ""
// console.log(JsUser["full name"])  //
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)      ///  after freeze we cannot change any values which is under the object(jsUser)
JsUser.email = "hitesh@microsoft.com"    // immutable cannot change (after freeze we cannot change the email)
// console.log(JsUser);

JsUser.greeting = function(){       /// add new key greeting in object JsUser and define function() to store "Hello jS user"    
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   ///Using 'this' for Object Reference, jsuser object se name key call kr rhr h 
}

console.log(JsUser.greeting());    /// how to access is imp 
console.log(JsUser.greetingTwo());
