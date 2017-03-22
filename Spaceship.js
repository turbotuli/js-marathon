class Spaceship {
  constructor(name) {
    this.name = name
    this.crew = []
    this.propulsion = null
  }

  loadCrew(crew) {
    crew.forEach((member) => {
      this.crew.push(member)
      console.log(`${member.name} has boarded the ship!`)
    })
  }

  captain() {
    let random = Math.floor(Math.random() * (this.crew.length - 1))
    return this.crew[random]
  }

  mountPropulsion(rocket) {
    this.propulsion = rocket
    console.log('Rocket mounted!')
  }

  takeoff() {
    if(this.propulsion.fuel > 0) {
      console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR...BLAST OFF!')
      this.propulsion.fire()
    } else {
      console.log("The engines failed to fire. Did we forget to fuel up?")
    }
  }

  countdown(seconds) {
    if(seconds > 0) {
      console.log(seconds)
      seconds -= 1
      this.countdown(seconds)
    } else {
      console.log('Engines commencing...')
    }
  }

}
module.exports = Spaceship
