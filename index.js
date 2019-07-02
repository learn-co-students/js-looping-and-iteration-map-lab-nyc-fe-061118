// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let lcdrivers = drivers.map(driver => driver.toLowerCase());
  return lcdrivers;
}

function nameToAttributes(drivers){
    let splitdrivers = drivers.map(createNameObject);
  return splitdrivers;
}

function createNameObject(driver){
let newname = driver.split(" ");
let firstname = newname[0];
let lastname = newname[1];
return {firstName:firstname, lastName:lastname};
}

function attributesToPhrase(drivers){
 return drivers.map(Phraseru);
}

function Phraseru(drivers){
  nameOf = drivers['name'];
  placeOf = drivers['hometown'];
  return nameOf + " is from " + placeOf;
}
