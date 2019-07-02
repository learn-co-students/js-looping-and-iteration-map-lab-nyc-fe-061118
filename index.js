// Code your solution in this file.
function lowerCase(name) {
  return name.toLocaleLowerCase()
}

function lowerCaseDrivers(drivers) {
  return drivers.map(lowerCase);
}

function separateStrings(names) {
  let newNames = names.split(' ');
  let newNameObject = {
    firstName: newNames[0],
    lastName: newNames[1]
  }
  return newNameObject;
}

function nameToAttributes(drivernames) {
  return drivernames.map(separateStrings);
}

function whereImFrom(drivers) {
  return `${drivers.name} is from ${drivers.hometown}`;
}

function attributesToPhrase(drivers) {
  return drivers.map(whereImFrom)
}