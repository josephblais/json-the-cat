const request = require('request');
const input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (err, res, body) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  if (res.statusCode !== 200) {
    console.log(`Error - status code: ${res.statusCode}`);
    return;
  } else {
    const data = JSON.parse(body);
    // console.log(data);
    if (data === undefined || data.length === 0) {
      console.log(`Error: cat not found`);
      return;
    } else {
      console.log(data[0].description);
    }
  }
});