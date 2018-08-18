var request = require('request')
require('dotenv').config()
var fs = require('fs')
var csv = require("fast-csv");

var apiToken = process.env.API_TOKEN
var aid = process.env.AID


makeRequest = (userData) => {
  var url = `https://sandbox.tinypass.com/api/v3/publisher/conversion/custom/create`
  var options = {
    url: url,
    form: {
      api_token: apiToken,
      aid: aid,
      uid: userData.user_id,
      term_id: userData.term_id
    },
    method: 'POST',
  };
  console.log(options)
  request(options, function (error, response, body) {
    if (response.body.code !== 0) {
      fs.appendFile('./logTerms.txt', `CALL: ${JSON.stringify(options.form)} \n ERROR: ${JSON.stringify(response.body)} \n`)
    }
    console.log(response.body)
    parser.resume()
  });

}

var termData = fs.createReadStream("terms.csv");
var parser = csv
  .fromStream(termData, { headers: true })
  .on("data", function (data) {
    parser.pause()
    makeRequest(data)
  })
  .on("end", function () {
  });


