const titleCase = str => {


    const arr = str.split(" ")
    console.log(arr)

    // [ 'My', 'name', 'is', 'tajmahal' ]

    // word.charAt(0).toUpperCase() + word.slice(1)
    // name
    // n --> N
    // N + ame = Name
    const newArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    return newArr.join(" ")
}


console.log(titleCase("My name is tajmahal"));
// My Name Is Tajmahal