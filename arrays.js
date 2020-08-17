var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles",];
function addElementToBeginningOfArray(array, element){
return [element, ...array];
}
addElementToBeginningOfArray(chocolateBars, "hersheys")

console.log(chocolateBars)
