var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles",];
function addElementToBeginningOfArray(array, element){
return [element, ...array];
}
addElementToBeginningOfArray(chocolateBars, "hersheys");


 function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
 }
 destructivelyAddElementToBeginningOfArray(chocolateBars, "Hersheys");
;

function addElementToEndOfArray(array, element){
  return [...array, element]
} addElementToEndOfArray(chocolateBars, "3 Musk");


function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index){
  return array[index]
} accessElementInArray(chocolateBars, 2)
console.log(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(array){
  return array[index]
}
