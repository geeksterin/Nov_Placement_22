const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node"
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node"
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

/**
 * 1. Print name who has points >= 40
 * 2. Print namme who has skills of MERN
 */

function getNamesOfUsersWithMorePoints() {
    const userNames = Object.keys(users)
    
    const usersWithGreaterPoints = []

    userNames.forEach(name => {
        if(users[name].points > 40) {
            usersWithGreaterPoints.push(name)
        }
    })

    console.log(usersWithGreaterPoints)
    return usersWithGreaterPoints;

}

function getUsersWithMernSkills() {
    const MERN_SKILLS = ["mongodb", "express", "react", "node"]
    const userNames = Object.keys(users)

    const usersWithMernSkills = []

    userNames.forEach(name => {
        const arr = []
       MERN_SKILLS.forEach(skill => {
         if(users[name].skills.join(",").toLowerCase().split(",").includes(skill)){
            arr.push(name)
         }
       })
       console.log(res)
        if(res.length === MERN_SKILLS.length) {
            usersWithMernSkills.push(name)
        }
    })

    console.log(usersWithMernSkills)

    return usersWithMernSkills


}

// getNamesOfUsersWithMorePoints()
getUsersWithMernSkills()