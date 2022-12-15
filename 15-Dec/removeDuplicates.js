const planets = require("./planets.json")


function removeDuplicatesFromPlanetsData(arrContainsDuplicates) {
    console.log("Length of arr before removing duplicates", arrContainsDuplicates.length)
    const resultingArr = []

    arrContainsDuplicates.forEach((planet) => {
        const doesPlanetExistInResultingArr = resultingArr.find(r => r.name === planet.name);
        if(!doesPlanetExistInResultingArr) {
            resultingArr.push(planet)
        }
    })
    return resultingArr;
}



const result = removeDuplicatesFromPlanetsData(planets.results)
console.log(result);