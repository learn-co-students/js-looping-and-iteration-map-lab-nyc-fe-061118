const sinon = require('sinon');

describe('index.js', function() {
  describe('lowerCaseDrivers()', function() {
    const drivers = [];

    beforeEach(function() {
      drivers.length = 0;

      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby');
    });

    after(function() {
      Array.prototype.map.restore();
    });

    it('uses the Array map method', function() {
      let spy = sinon.spy(Array.prototype, 'map');
      lowerCaseDrivers(drivers);
      expect(
        spy.calledOnce,
        'map was not called in lowerCaseDrivers()'
      ).to.equal(true);
    });

    it('returns all drivers lowercased', function() {
      expect(lowerCaseDrivers(drivers)).to.eql([
        'bobby',
        'sammy',
        'sally',
        'annette',
        'sarah',
        'bobby'
      ]);
    });

    it('does not modify the original array', function() {
      lowerCaseDrivers(drivers);

      expect(drivers).to.eql([
        'Bobby',
        'Sammy',
        'Sally',
        'Annette',
        'Sarah',
        'Bobby'
      ]);
    });
  });

  describe('nameToAttributes()', function() {
    const drivers = [];

    beforeEach(function() {
      drivers.length = 0;

      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby');
    });

    after(function() {
      Array.prototype.map.restore();
    });

    it('uses the Array map method', function() {
      let spy = sinon.spy(Array.prototype, 'map');
      nameToAttributes(drivers);
      expect(
        spy.calledOnce,
        'map was not called in nameToAttributes()'
      ).to.equal(true);
    });

    it('returns list of objects with appropriate first and last names', function() {
      const drivers = [
        'Bobby Smith',
        'Sammy Watkins',
        'Sally Jenkins',
        'Annette Sawyer',
        'Sarah Hucklebee',
        'bobby ridge'
      ];

      expect(nameToAttributes(drivers)).to.eql([
        { firstName: 'Bobby', lastName: 'Smith' },
        { firstName: 'Sammy', lastName: 'Watkins' },
        { firstName: 'Sally', lastName: 'Jenkins' },
        { firstName: 'Annette', lastName: 'Sawyer' },
        { firstName: 'Sarah', lastName: 'Hucklebee' },
        { firstName: 'bobby', lastName: 'ridge' }
      ]);
    });
  });

  describe('attributesToPhrase()', function() {
    const drivers = [];

    beforeEach(function() {
      drivers.length = 0;

      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby');
    });

    after(function() {
      Array.prototype.map.restore();
    });

    it('uses the Array map method', function() {
      let spy = sinon.spy(Array.prototype, 'map');
      attributesToPhrase(drivers);
      expect(
        spy.calledOnce,
        'map was not called in attributesToPhrase()'
      ).to.equal(true);
    });

    it('converts to list saying the name and where each individual is from', function() {
      const drivers = [
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ];

      expect(attributesToPhrase(drivers)).to.eql([
        'Bobby is from Pittsburgh',
        'Sammy is from New York',
        'Sally is from Cleveland',
        'Annette is from Los Angeles',
        'Bobby is from Tampa Bay'
      ]);
    });
  });
});
