
// HINT - use args to findout other elemennts
function removeNumbersFromArr(arr, ...args) {
    const elementsToBeRemoved = args
    const result = arr.filter(el => !elementsToBeRemoved.includes(el))
    return result
}



console.log(removeNumbersFromArr([1,2,3,4,5,1,2], 1,2)) //[3,4,5]