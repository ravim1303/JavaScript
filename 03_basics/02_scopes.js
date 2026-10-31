//var c = 300
let a = 300    /// global scope h
if (true) {
    /// ye sabhi scope block ke under h 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);    /// 10 print hoga
    
}



// console.log(a);    /// output 300
// console.log(b);   /// not print anything
// console.log(c);   


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);    // hitesh youtube
    }
    // console.log(website);     /// not access outside the scope
}

// console.log(username);   /// also not access bcz outside se access kr rhe h


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   ///  6

function addone(num){
    return num + 1
}


/// search  hosting and execution  read it 
addTwo(5)     /// give error bcz function delearation is different
const addTwo = function(num){
    return num + 2
}
