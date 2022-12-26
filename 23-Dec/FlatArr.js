const flatArr = arr => {
    let result = []

    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])){
            result = result.concat(flatArr(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result;
}






console.log(flatArr([[1,2], 3, {}, 5, [6, "sdf", [{}, "9"]]]))// [1,2,3,{},5,6,"sdf",{},"9"]