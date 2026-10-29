// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)   // at the end
// myArr.pop()  // pop from the end

// myArr.unshift(9)   // add at front
// myArr.shift()    // pop from front

// console.log(myArr.includes(9));   // check 9 is present or not  return true OR false 
// console.log(myArr.indexOf(3));    // number 3 is present , return index value otherwise -1

// const newArr = myArr.join()    //converts an array into a single string by joining all of its elements together, separated by commas by default.

// console.log(myArr);
// console.log( newArr);


// slice, splice     
// slice()- method is used to extracts the portion of an array or string and return the new copy , without modify in original data
// splice()-  method changes the contents of an array in place by removing, replacing, or adding elements. It directly modifies 
//(mutates) the original array and returns a new array containing any deleted items.
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

// Extract from index 1 up to (but not including) index 4
const subArray = fruits.slice(1, 4);
console.log(subArray); // Output: ['Banana', 'Orange', 'Mango']

// The original array remains untouched
console.log(fruits);   // Output: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']

/// splice()
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// Remove 2 elements starting at index 1
const removed = fruits.splice(1, 2); 

console.log(fruits);  // ['Apple', 'Date'] (Modified in place)
console.log(removed); // ['Banana', 'Cherry'] (Returned items)


// sir ka examples
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
