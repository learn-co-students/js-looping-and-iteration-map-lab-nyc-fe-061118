// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map((driver) => driver.toLowerCase()) 
  
}
function createNameObject(driver) {
  let nameArray = driver.split(" ")
  let firstName = nameArray [0]
  let lastName = nameArray[1]
  return {firstName: firstName, lastName: lastName} 
}
function nameToAttributes(names) {
  return names.map(createNameObject)  
}
function attributesToPhrase(drivers) {
  return drivers.map(driverinfo) 

}
function driverinfo(driver) {
  return `${driver.name} is from ${driver.hometown}`
  
}




