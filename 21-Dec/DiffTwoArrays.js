// const diffTwoArrays = (arr1, arr2) => {
//   let result = [];

//   arr1.forEach((el) => {
//     if (!arr2.includes(el)) {
//       result.push(el);
//     }
//   });

//   arr2.forEach((el) => {
//     if (!arr1.includes(el)) {
//       result.push(el);
//     }
//   });

//   return result;
// };


const diffTwoArrays =(arr1, arr2) => {
    const numToCountMap = {}
    const mergedArr =  [...arr1, ...arr2]

    // {
    //     1: 2,
    //     2: 2,
    //     3: 2,
    //     4: 1
    // }

    for(let i=0; i<mergedArr.length; i++) {
        // if()
    }

}


console.log(diffTwoArrays([1, 2, 3,5,9,0], [5,2, 3, 1, 4])) //[4]

