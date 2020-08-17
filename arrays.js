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
}
console.log(accessElementInArray(chocolateBars, 2));
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element);
  return array;
}
function removeElementFromBeginningOfArray(array){
  return array.slice(0);

}
