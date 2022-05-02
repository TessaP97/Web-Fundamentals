function alwaysHungry(arr) {
    for (let i = arr[0]; i < arr.length; i++)
     if (i === "food") {
    console.log("yummy");
    } else {
    console.log("im Hungry");
    }
      }

//-------------------------------

function highPass(arr, cutoff) {
  var filteredArr = [];
  for (let i = arr[0]; i < arr.length; i++) {
    if ( i < 5 )
  filteredArr.push() += i
  }
   return filteredArr;
  }
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);

//--------------------------------------------------

function betterThanAverage(arr) {
  var sum = 0;
   for (var i = 0; i < arr.length; i++) {
     sum += arr[i];
   }
  var count = 0
  // count how many values are greated than the average
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

