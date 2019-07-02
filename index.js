// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}
function toObj(driver) {
  let names = driver.split(' ');
  return {firstName: names[0], lastName: names[1]};
}
function nameToAttributes(drivers) {
  return drivers.map(toObj);
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}