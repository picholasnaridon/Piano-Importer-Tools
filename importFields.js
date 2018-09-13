var request = require("request");
require("dotenv").config();
var fs = require("fs");
var csv = require("fast-csv");
var separateReqPool = { maxSockets: 10 };

var apiToken = process.env.API_TOKEN;
var aid = process.env.AID;

makeRequest = userData => {
  var url = `https://api.tinypass.com/api/v3/publisher/user/update?api_token=${apiToken}&aid=${aid}&uid=${
    userData.user_id
    }`;
  var options = {
    url: url,
    pool: separateReqPool,
    method: "POST",
    json: {
      // TEXT/NUM FIELDS
      business_name: userData["business_name"],
      address1: userData["address1"],
      city: userData["city"],
      us_zip_code: userData["us_zip_code"],
      phone_number: userData["phone_number"],
      mobilePhoneNew: userData["mobilePhoneNew"],
      migration_revenue_new: userData["migration_revenue_new"],
      legacyTaxRate: userData["legacyTaxRate"],
      pfid: userData["pfid"],
      legacy_order_id: userData["legacy_order_id"],
      fjid: userData["fjid"],
      legacy_user_name: userData["legacy_user_name"],
      frid: userData["frid"],
      // SELECTION FIELDS
      country: `["${userData["country"]}"]`
        ? `["${userData["country"]}"]`
        : null,
      AlertPreferences: `["${userData["AlertPreferences"]}"]`
        ? `["${userData["AlertPreferences"]}"]`
        : null,
      legacy_package_name: userData["legacy_package_name"]
        ? userData["legacy_package_name"]
        : null,
      legacyMemberType: userData["legacyMemberType"]
        ? userData["legacyMemberType"]
        : null,
      newsletterDelivery: `["${userData["newsletterDelivery"]}"]`
        ? `["${userData["newsletterDelivery"]}"]`
        : null,
      order_status: `["${userData["order_status"]}"]`
        ? `["${userData["order_status"]}"]`
        : null,
      us_state: `["${userData["us_state"]}"]`
        ? `["${userData["us_state"]}"]`
        : null,
      mmwuc_new: `["${userData["mmwuc_new"]}"]`
        ? `["${userData["mmwuc_new"]}"]`
        : null
    }
  };
  console.log(options);
  request(options, function (error, response, body) {
    if (response.body.code !== 0) {
      fs.appendFile(
        "./logFields.txt",
        `CALL: \n ERROR: ${response.body.message} \n`
      );
    }
    console.log(response.body); // Print the shortened url.
    parser.resume();
  });
};

var fieldData = fs.createReadStream("PFFIELDS2.csv");
var parser = csv
  .fromStream(fieldData, { headers: true })
  .on("data", function (data) {
    parser.pause();
    makeRequest(data);
  })
  .on("end", function () { });


