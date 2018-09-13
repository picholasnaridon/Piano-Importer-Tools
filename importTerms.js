var request = require("request");
require("dotenv").config();
var fs = require("fs");
var csv = require("fast-csv");
var moment = require("moment");
var separateReqPool = { maxSockets: 15 };

var apiToken = process.env.API_TOKEN;
var aid = process.env.AID;

makeRequest = userData => {
  var timeNowUnix = moment().unix();
  var nextBillUnix = moment(userData.nextBillingDate, "MM-DD-YYYY").unix();
  var timeDiff = nextBillUnix - timeNowUnix;

  var url = `https://api.tinypass.com/api/v3/publisher/conversion/custom/create`;
  var options = {
    url: url,
    pool: separateReqPool,
    form: {
      api_token: apiToken,
      aid: aid,
      uid: userData.user_id,
      term_id: userData.term_id,
      access_period: timeDiff
    },
    method: "POST"
  };
  console.log(options);

  if (nextBillUnix > timeNowUnix) {
    request(options, function (error, response, body) {
      var data = JSON.parse(body)
      console.log(data.code)
      if (data.code !== 0) {
        fs.appendFile("failedTerms.json", `${JSON.stringify(userData)},`);
        fs.appendFile(
          "./logTerms.txt",
          `CALL: ${JSON.stringify(options.form)} \n ERROR: ${data.message}
           \n`
        );
      }
      parser.resume();
    });
  } else {
    parser.resume();
  }
};

var termData = fs.createReadStream("PFTERMS1.csv");
var parser = csv
  .fromStream(termData, { headers: true })
  .on("data", function (data) {
    parser.pause();
    makeRequest(data);
  })
  .on("end", function () { });
