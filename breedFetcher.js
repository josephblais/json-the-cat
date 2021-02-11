const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    if (err) {
      return callback(err, null);
    }
    if (res.statusCode !== 200) {
      return (`Error - status code: ${res.statusCode}`);
    } else {
      const data = JSON.parse(body);
      // console.log(data);
      if (data === undefined || data.length === 0) {
        return callback(`cat not found`, null);
      } else {
        return callback(null, data[0].description);
      }
    }
  });

};



module.exports = { fetchBreedDescription };