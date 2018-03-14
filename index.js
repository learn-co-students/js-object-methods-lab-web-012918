// code solution here
class President {

  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name
    this.politicalParty = politicalParty
    this.yearsInOffice = yearsInOffice
    this.homeState = homeState
  }

  veto() {
    return "NO!"
  }

  passBill() {
    return "You can do that!"
  }

  doCharity() {
    return "I like to help people."
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }

}

const georgeWashington = new President("Jimmy Carter", "Democrat", "8 years", "Louisiana")
const abrahamLincoln = new President("Abe Lincoln", "Democrat", "5 years", "Louisiana")
const richardNixon = new President("Jimmy Carter", "Repulican", "3 years", "Texas")
const jimmyCarter = new President("Jimmy Carter", "Democrat", "4 years", "Louisiana")
