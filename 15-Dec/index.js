// what is this
// how this keyword behaves in different scenarios
// call, apply and bind
// diff between normal function and arrow function in terms this keyword

// function demoThis(){
//     console.log(this.name)
// }


function add(a) {
    console.log(`Hello, ${this.name}`)
    let sum = a+b;

    console.log(sum)
    return sum;
}

let person = {
    name: "taj",
    age: 26
}

// add(1,3)
add.call(person, [3,4])

// call, apply and bind
// add.apply(person, [[1,2,3,4]])

// add.bind(person, 3,4)

// const boundedToPerson = add.bind(person, 3,4)
// boundedToPerson()

// demoThis() 

// demoThis.call(person)

