var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles",];
function addElementToBeginningOfArray(array, element){
return [element, ...array];
}
addElementToBeginningOfArray(chocolateBars, "hersheys");

console.log(chocolateBars);
 function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
 }
 destructivelyAddElementToBeginningOfArray(chocolateBars, "Hersheys");
 console.log(chocolateBars);

function addElementToEndOfArray(array, element){
  return [...array, element]
} addElementToEndOfArray(chocolateBars, "3 Musk");
console.log(chocolateBars);
