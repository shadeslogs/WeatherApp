const request = require('request');
const argv = require('yargs').argv;

let apiKey = '4a38948629c4913aa51a97d8a785faa9';
let city = argv.c || 'frankfurt';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});