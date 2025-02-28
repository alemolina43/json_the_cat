//const fs = require('node:fs');
const needle = require('needle');



const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  //console.log(url, "url");

  needle.get(url, function(err, response) {
 
    if (response.statusCode === 200 && response.body.length > 0) {
      return callback(null, response.body[0].description);
      
    }
    return callback('breed not found', null);
  });
};





module.exports = {fetchBreedDescription};






