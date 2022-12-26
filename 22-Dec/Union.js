// function getUnitedArr(...args) {
//     let arr = [...args[0], ...args[1], ...args[2]]
//     // [1,2,3,2,5,6,1,1,2,3,4]

//     const result= []
//     arr.forEach((el, idx, arr) => {
//         if(result.indexOf(el) == -1){
//             result.push(el)
//         }
//     })
    
//     console.log(result)
//     return result
// }

// const getUnitedArr = (...args) =>{
//     // [[1,2],[2,3]]
//     let arr = args.flat()
//     let result = [];
//     let i =0;
//      arr.forEach((e)=>{
//         const valid = result.find(ele=>ele === e);
//         if(!valid){
//             result.push(e)
//         }
//      })
//      console.log(result)
//     }
    // getUnitedArr([1,2,3],[2,5,6,1],[1,2,3,4]);


const union =  (arr1, arr2, arr3) => {
    const arr = [...arr1, ...arr2, ...arr3];
     const newarr =[];

     arr.sort((a, b) => { return a-b; });
     console.log(arr);

     for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] !== arr[i+1]) newarr.push(arr[i]);
        else continue;
     }

     newarr.push(arr[arr.length-1]);

     return newarr;
     
}

console.log(union([1,4,6,2,6], [2,4,6,3,6], [2,1,4,56,7,8]));

getUnitedArr([1,2,3], [2,5,6,1], [1,2,3,4]) //[1,2,3,5,6,4]