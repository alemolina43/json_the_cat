const args = process.argv.slice(2);
//const fs = require('node:fs');
const needle = require('needle');

const query = args[0].slice(0,3);

needle.get('https://api.thecatapi.com/v1/breeds/search?q=' + query, function(error, response) {
  if (error) {
    console.error("Request failed:", error);
    return;
  }

  if (response.statusCode === 200 && response.body.length > 0) {
    console.log(response.body[0].description);
  } console.log("breed not found");
});
//console.log(typeof body);