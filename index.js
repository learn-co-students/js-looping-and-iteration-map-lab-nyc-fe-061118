// Code your solution in this file.
function lowerCase(name) {
  return name.toLocaleLowerCase()
}

function lowerCaseDrivers(drivers) {
  return drivers.map(lowerCase);
}

function seperatedStrings (drivers) {
  let newNames = drivers.split(' ')
  newNames = {
    firstName: newNames[0],
    lastName: newNames[1]
  }
  return newNames;
}
  
function nameToAttributes(drivers) {
  return drivers.map(seperatedStrings)
}

function whereImFrom(drivers) {
  return drivers.name + " is from " + drivers.hometown;
}


function attributesToPhrase(drivers) {
  return drivers.map(whereImFrom)
}