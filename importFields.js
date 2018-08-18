var request = require('request')
require('dotenv').config()
var fs = require('fs')
var csv = require("fast-csv");

var apiToken = process.env.API_TOKEN
var aid = process.env.AID


makeRequest = (userData) => {
  var url = `https://sandbox.tinypass.com/api/v3/publisher/user/update?api_token=${apiToken}&aid=${aid}&uid=${userData.user_id}`
  var options = {
    url: url,
    method: 'POST',
    json: {
      'fieldOne': userData['fieldOne'],
      'fieldTwo': userData['fieldTwo'],
      'fieldThree': userData['fieldThree'],
      'fieldFour': userData['fieldFour']
    }
  };
  console.log(options)
  request(options, function (error, response, body) {
    if (response.body.code !== 0) {
      fs.appendFile('./logFields.txt', `CALL: ${JSON.stringify(options)} \n ERROR: ${response.body.message} \n`)
    }
    console.log(response.body) // Print the shortened url.
    parser.resume()
  });

}

var fieldData = fs.createReadStream("fields.csv");
var parser = csv
  .fromStream(fieldData, { headers: true })
  .on("data", function (data) {
    parser.pause()
    makeRequest(data)
  })
  .on("end", function () {
  });


