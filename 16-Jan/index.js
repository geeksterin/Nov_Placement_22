const person = {
    name: 'jane',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    },
    marks: 0

   
};

if(person.hasOwnProperty('marks')) {
    console.log(person.marks)
}

// if(person.marks) {
//     console.log(person.marks)
// }

// console.log(person.hasOwnProperty('state'))

const person2 = {
    name: "jane",
    age: 30,

    address: {
        city: "New York",
        state: "NY"
    }

}




//  const { name:firstName = "john", address: { city = {}, state="karnataka" } = {}, address: anotherAddress } =  person2;
   
// console.log(anotherAddress)
// console.log(person.name)

// console.log(person.age)
// console.log(person["age"])

// console.log(person.address.city)
// console.log(person["address"]["city"])

// console.log(person.address && person.address.city)
// console.log(person?.address?.city)



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [a, b, ...applw] =  numbers
 
// console.log(applw)