
function sumOfAll(arr) {
    let newArr = []
    if(arr[0] > arr[1]){
        newArr[0] = arr[1]
        newArr[1] = arr[0]
    } else {
        newArr = arr
    }

    let result = 0
    for(let i=newArr[0]; i<=newArr[1]; i++){
        console.log(i, result)
        result += i
    }

    console.log(result)

}


sumOfAll([1,6]) // 1+2+3+4+5+6
sumOfAll([1,4]) //1+2+3+4 = 10
sumOfAll([4,1]) //1+2+3+4 = 10