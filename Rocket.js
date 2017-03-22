let rocket = {
  fuel: 0,
  addFuel(amount) {
    this.fuel += amount
    return this.fuel
  },
  fire() {
    if(this.fuel > 0) {
      this.fuel -= 1
      console.log('The engines have been fired!')
      console.log(`Remaining fuel: ${this.fuel}`)
      return true
    } else {
      console.log("There is no fuel. The engines failed to fire.")
      return false
    }
  return undefined
  }
}

module.exports = rocket
