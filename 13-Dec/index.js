// What is a promise?
//  Promise is an object which holds the eventual result of an asynchronous operation.
// 3 states of promise - pending, resolved, rejected

// how to create a promise?
// var isEvenOrOdd = 3;
// const promise1 = new Promise((resolve, reject) => {
//     if(isEvenOrOdd % 2 === 0) {
//         resolve({ message: `${isEvenOrOdd} is even number!`})
//         return
//     } 

//     reject({ message: `${isEvenOrOdd} is odd number!`})
// })

// ways to handle a promise
// promise1.then((data) => console.log(data)).catch((err) => console.log(err))


// const executePromise = async () => {
//     try {

//         const data = await promise1;
//         console.log(data)
//     } catch(err) {
//         console.log("in catch",err)
//     }
// }

// executePromise()

// exampe methods which returns a promise

/*
 * apicall1
    apicall2
    apicall3
 */

// const p1 = new Promise((res, rej) => res("p ---- 1"))
// const p2 = new Promise((res, rej) => rej("p ---- 2"))
// const p3 = new Promise((res, rej) => res("p ---- 3"))

// p1.then(data => console.log(data)).catch(err => console.log(err))
// p2.then(data => console.log(data)).catch(err => console.log(err))
// p3.then(data => console.log(data)).catch(err => console.log(err))
// Promise.all([p1, p2, p3]).then(data => console.log(data)).catch(err => console.log(err))