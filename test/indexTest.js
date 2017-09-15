const expect = chai.expect;

describe('drivers', function() {
  describe('findMatching', function() {
    it('returns all drivers lowercased', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "Bobby"]
      expect(lowerCaseDrivers(drivers)).to.eql(["bobby", "sammy", "sally", "annette", "sarah", "bobby"])
    })

    it('does not modify the original array', function() {
      let drivers = ['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "Bobby"]
      lowerCaseDrivers(drivers)
      expect(drivers).to.eql(['Bobby', 'Sammy', "Sally", "Annette", "Sarah", "Bobby"])
    })
  })

  describe('nameToAttributes', function() {
    it('returns list of objects with appropriate first and last names', function() {
      let drivers = ['Bobby Smith', 'Sammy Watkins', "Sally Jenkins", "Annette Sawyer", "Sarah Hucklebee", "bobby ridge"]
      expect(nameToAttributes(drivers)).to.eql([{firstName: "Bobby", lastName: "Smith"},
      {firstName: "Sammy", lastName: "Watkins"},
      {firstName: "Sally", lastName: "Jenkins"},
      {firstName: "Annette", lastName: "Sawyer"},
      {firstName: "Sarah", lastName: "Hucklebee"},
      {firstName: "bobby", lastName: "ridge"}])
    })
  })

  describe('attributesToPhrase', function() {
    it('converts to list saying the name and where each individual is from', function() {
      let drivers = [{name: 'Bobby', hometown: 'Pittsburgh'},
      {name: 'Sammy', hometown: 'New York'}, {name: "Sally", hometown: 'Cleveland'},
      {name: "Annette", hometown: "Los Angelos"}, {name: "Bobby", hometown: "Tampa Bay"}]
      expect(attributesToPhrase(drivers)).to.eql(["Bobby is from Pittsburgh", "Sammy is from New York", "Sally is from Cleveland",
      "Annette is from Los Angelos", "Bobby is from Tampa Bay"])
    })
  })
})
