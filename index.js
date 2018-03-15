class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name
    this.politicalParty = politicalParty
    this.yearsInOffice = yearsInOffice
    this.homeState = homeState
  }
  veto() {
    return 'NO!';
  }
  passBill() {
    return 'You can do that!';
  }
  doCharity() {
    return 'I like to help people.'
  }
  conductPressInterview() {
    return 'I am proud to be an American.'
  }
  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`;
  }
}

const pres1 = new President('George Washington', 'Independent', 8, 'Virginia');
const pres2 = new President('Abraham Lincoln', 'National Union', 4, 'Illinois');
const pres3 = new President('Richard Nixon', 'Republican', 1, 'California');
const pres4 = new President('Jimmy Carter', 'Democrat', 1, 'Georgia');