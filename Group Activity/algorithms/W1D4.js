var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

x=5; newValue = 5; console.log(5)

// 1. x = 15
// 2. console.log(x) logs value of x being 5
// 3. console.log(x) logs value of x being 15



var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);



// 1. return 5 + (-10) = -5; 
// 2. value of x + amount(-10) ----> 5 + (-10) = 5
// 3. console then logs string "hello there"
// 4. console.log(x) logs value of x being 5
// 5. console.log(result) logs addToX(-10)
// 6. console.log(x) logs value of x being 5



//------------------------------------------------------
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

//