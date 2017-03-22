let Spaceship = require('./Spaceship.js');
let CrewMember = require('./CrewMember.js')
let rocket = require('./Rocket.js')
// let spaceship = new Spaceship();

let ourShip = new Spaceship('Serenity')
let crewNames = ["Jenn", "Max", "Ari", "Ryan", "Justin", "Ted"]
let trainedCrew = []
trainCrew = (crew) => {
  crew.forEach((name) => {
    let trainee = new CrewMember(name)
    trainee.trained = true
    trainedCrew.push(trainee)
  })
}
launchpad = (ship, crew) => {
  console.log(`Launch sequence for ${ship.name} has been initiated!`)
  ship.loadCrew(crew)
  let captain = ship.captain()
  console.log(`${captain.name} has randomly been chosen as captain! High Five!`)
  ship.mountPropulsion(rocket)
  rocket.addFuel(10)
  ship.countdown(10)
  ship.takeoff()
}

trainCrew(crewNames)
launchpad(ourShip, trainedCrew)
