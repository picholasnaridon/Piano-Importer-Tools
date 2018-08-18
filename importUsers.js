var request = require('request')
require('dotenv').config()
var fs = require('fs')
var csv = require("fast-csv");
const Json2csvParser = require('json2csv').Parser;

var apiToken = process.env.API_TOKEN
var aid = process.env.AID

var url = `https://sandbox.tinypass.com/api/v3/publisher/import/users?&header_size=1&api_token=${apiToken}&aid=${aid}`
const fields = ['user_id', 'email', 'firstName', 'lastName', 'password']

makeRequest = () => {
  var formData = {
    file: fs.createReadStream("user.csv"),
  }
  request.post({ url: url, formData: formData }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    var response = JSON.parse(body)
    console.log(body)
    if (response.data.code !== 0 || response.data.failed) {
      fs.appendFile('./logUsers.txt', `ERROR: ${JSON.stringify({ url: url, formData: formData })} \n RESPONSE: ${response.data.failed} \n`)
    }
    parser.resume()
  });
}

var users = fs.createReadStream("users.csv");
var parser = csv
  .fromStream(users, { headers: true })
  .on("data", function (data) {
    parser.pause()
    console.log(data)
    const json2csvParser = new Json2csvParser({ fields, quote: '' });
    var csv = json2csvParser.parse(data);
    fs.writeFile('user.csv', csv, function () {
      makeRequest()
    })
  })
  .on("end", function () {
  });


