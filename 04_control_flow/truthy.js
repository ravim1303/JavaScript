const userEmail = []    /// [] , {}, "0", " "  all are true , ""  false hoga

if (userEmail) {
    console.log("Got user email");    /// print this statemnet 
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}    /// length is 0

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");    /// print statemet
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10      /// val1 = 5 asign hoga
// val1 = null ?? 10   /// val1 = 10 
// val1 = undefined ?? 15  /// val1 = undefined asign hoga 
val1 = null ?? 10 ?? 20    /// val1 = 10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
