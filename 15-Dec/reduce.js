const planets = require("./planets.json")

console.log(planets.results.length)

// let numbers = [1,2,3,4,5]

const namesObj = planets.results.reduce((a,c, i) => {
    const foundNameObj = a.find(el => el.name === c.name)

    return  [...a, { name: c.name, population: c.population }]
}, [])

console.log(namesObj)

// console.log(res)