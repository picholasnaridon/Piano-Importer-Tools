var request = require('request')
var querystring = require('querystring');
var fs = require('fs')

// Start Account
var accountFrom = {
  aid: 'g3jA5W8JeL',
  apiToken: 'RamRBVDhA84XNo2e2A8Ckzw8et0jo0GV0yqH1ajk'
}
var getUrl = `https://sandbox.tinypass.com/api/v3/publisher/customFields/get?api_token=${accountFrom.apiToken}&aid=${accountFrom.aid}`


// Accounts to migrate to
var accounts = [
  { aid: '<acct1 AID>', apiToken: '<acct1 API token>' },
  { aid: '<acc2 AID>', apiToken: '<acct2 API token>' },
  // ...
]

var fieldData;

var iterate = function (accounts, fieldData) {
  // Iterate through accounts 
  accounts.forEach(function (account) {
    // Make API call to post fields
    postFields(fieldData, account.aid, account.apiToken)
  })
}

var postFields = function (fieldData, aid, apiToken) {
  var postUrl = `https://api.tinypass.com/api/v3/publisher/customFields/update?api_token=${apiToken}&aid=${aid}`

  var form = {
    custom_fields: fieldData
  }
  var formData = querystring.stringify(form);
  var contentLength = formData.length;

  request({
    url: postUrl,
    headers: {
      'Content-Length': contentLength,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData,
    method: "POST"
  }, function (error, response, body) {
    console.log(body)
  })
}

var execute = function () {
  // Get custpm fields
  request(getUrl, function (error, response, body) {
    var res = JSON.parse(body)
    var fields = res.data
    fieldData = fields
    console.log(fieldData)
    fs.appendFile("proFarmerFields.json", fieldData)
    // Pass fields JSON to iterate
    // iterate(accounts, fieldData)
  })
}

execute()

