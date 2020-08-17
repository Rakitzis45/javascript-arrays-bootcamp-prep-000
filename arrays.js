var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles",];
function addElementToBeginningOfArray(array, element){
return [element, ...array];
}
addElementToBeginningOfArray(chocolateBars, "hersheys");

console.log(chocolateBars);
 function destructivelyAddElementToBeginningOfArray(array, element){
   return array.unshift(element);
 }
 destructivelyAddElementToBeginningOfArray(chocolateBars, "Hersheys");
 console.log(chocolateBars);
