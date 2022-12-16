// currying - pattern
function counter(a) {
    console.log(a);
    return function(b,c) {
        console.log(b, c)
    }
}

// 1. counter(1)
// 2. counter(1,2,3)

// if i have a curried function, a function within a function, whatever the variables are declared inside outer function will be still accessible inside inner function even after the execution of outer function is completed

// const count = counter(1,2)
// count(5)
// console.log(count()); 
// console.log(count())

// console.log(counter()()()())
console.log(counter(1)(2,3))
// console.log(counter()())
// console.log(counter()())

