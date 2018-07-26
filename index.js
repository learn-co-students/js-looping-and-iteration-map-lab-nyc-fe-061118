// Code your solution in this file.
function lowerCaseDriver(name){
  return name.toLowerCase()
}

function lowerCaseDrivers(drivers){
return drivers.map(lowerCaseDriver)
}

function createNewObject(name){
let nameArray = name.split (" ")
let firstName = nameArray [0]
let lastName = nameArray [1]
return {firstName: firstName , lastName: lastName};
}

function nameToAttributes (drivers) {
return drivers.map(createNewObject)
}

function  createNameHometownPhrases(newObject){
  let nameOnly =  newObject[ 'name']
  let hometownOnly = newObject ['hometown']
  return nameOnly + ' is from ' + hometownOnly;
}
function attributesToPhrase (driver){
  return driver.map(createNameHometownPhrases)
}