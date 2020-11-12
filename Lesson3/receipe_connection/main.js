//grabbing the dependency from node_modules folder to use
const cities = require("cities");

//looking up my zipcode and assigning it to 'myCity'
var myCity = cities.zip_lookup("19382");

//logging to the console the results of the zipcode lookup
console.log(myCity);
