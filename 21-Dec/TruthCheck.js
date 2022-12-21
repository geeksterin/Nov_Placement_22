const truthCheck = (arr, key) => {

    // const element = arr.find(el => !el[key])
    // return element ? false : true

    const newArr = arr.filter(el => {
        if(el[key] === 0) {
            return true
        }

        return el[key]
    })
    return newArr.length === arr.length
}





console.log(truthCheck([
    {
        "name": "safd",
        "age": 33
    },
    {
        "name": "john doe",
        "age": 12
    },
    {
        "name": "jane doe",
        "age": 22
    }
], "age"))

// truthy values and falsy values
// falsy values - undefined, null, NaN, 0, "" 
// truthy value - " ", 1,2,-1, "sdf",[], {}

// let name=" "
// if(name) {

// }