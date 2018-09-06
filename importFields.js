var request = require("request");
require("dotenv").config();
var fs = require("fs");
var csv = require("fast-csv");

var apiToken = process.env.API_TOKEN;
var aid = process.env.AID;

makeRequest = userData => {
  var url = `https://sandbox.tinypass.com/api/v3/publisher/user/update?api_token=${apiToken}&aid=${aid}&uid=${
    userData.user_ID
  }`;
  var options = {
    url: url,
    method: "POST",
    json: {
      // TEXT/NUM FIELDS
      business_name: userData["business_name"],
      address1: userData["address1"],
      city: userData["city"],
      us_zip_code: userData["us_zip_code"],
      PhoneNumber: userData["PhoneNumber"],
      mobilePhone: userData["mobilePhone"],
      migration_revenue: userData["migration_revenue"],
      legacy_tax_rate: userData["legacy_tax_rate"],
      pfid: userData["pfid"],
      legacy_order_id: userData["legacy_order_id"],
      fjid: userData["fjid"],
      frid: userData["frid"],
      // SELECTION FIELDS
      country: `["${userData["country"]}"]`
        ? `["${userData["country"]}"]`
        : null,
      AlertPreferences: `["${userData["AlertPreferences"]}"]`
        ? `["${userData["AlertPreferences"]}"]`
        : null,
      legacy_member_level: `["${userData["legacy_member_level"]}"]`
        ? `["${userData["legacy_member_level"]}"]`
        : null,
      legacy_member_type: `["${userData["legacy_member_type"]}"]`
        ? `["${userData["legacy_member_type"]}"]`
        : null,
      newsletterDelivery: `["${userData["newsletterDelivery"]}"]`
        ? `["${userData["newsletterDelivery"]}"]`
        : null,
      order_status: `["${userData["order_status"]}"]`
        ? `["${userData["order_status"]}"]`
        : null,
      us_state: `["${userData["us_state"]}"]`
        ? `["${userData["us_state"]}"]`
        : null
    }
  };
  console.log(options);
  request(options, function(error, response, body) {
    if (response.body.code !== 0) {
      fs.appendFile(
        "./logFields.txt",
        `CALL: ${JSON.stringify(options)} \n ERROR: ${response.body.message} \n`
      );
    }
    console.log(response.body); // Print the shortened url.
    parser.resume();
  });
};

var fieldData = fs.createReadStream("FJCF.csv");
var parser = csv
  .fromStream(fieldData, { headers: true })
  .on("data", function(data) {
    parser.pause();
    makeRequest(data);
  })
  .on("end", function() {});
