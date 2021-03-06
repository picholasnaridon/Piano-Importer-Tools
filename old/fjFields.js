var request = require('request')
var querystring = require('querystring');
var fs = require('fs')


var fields = {
  "fieldDefinitions": [
    {
      "fieldName": "business_name",
      "title": "Business Name",
      "comment": "Enter Your Business Name",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 73,
      "archived": false
    },
    {
      "fieldName": "address1",
      "title": "Street Address",
      "comment": "Street address line 1",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 93,
      "archived": false
    },
    {
      "fieldName": "address2",
      "title": "Address Line2",
      "comment": "Street address line2",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 29,
      "archived": false
    },
    {
      "fieldName": "city",
      "title": "City",
      "comment": "Enter Your City",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 93,
      "archived": false
    },
    {
      "fieldName": "canada_states",
      "title": "Province",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon"
      ],
      "optionsLink": 0,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 15,
      "archived": false
    },
    {
      "fieldName": "us_state",
      "title": "State",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [],
      "optionsLink": 2,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 84,
      "archived": false
    },
    {
      "fieldName": "us_zip_code",
      "title": "Zip code",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 84,
      "archived": false
    },
    {
      "fieldName": "canada_postal_code",
      "title": "Postal code",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 18,
      "archived": false
    },
    {
      "fieldName": "country",
      "title": "Country",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [
        "United States",
        "Canada"
      ],
      "optionsLink": 0,
      "setName": "Address",
      "requiredByDefault": false,
      "valuesCount": 94,
      "archived": false
    },
    {
      "fieldName": "phone_number",
      "title": "Phone Number",
      "comment": "Enter your Phone Number",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Phone",
      "requiredByDefault": false,
      "valuesCount": 45,
      "archived": false
    },
    {
      "fieldName": "mobilePhoneNew",
      "title": "Mobile Phone",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Phone",
      "requiredByDefault": false,
      "valuesCount": 11,
      "archived": false
    },
    {
      "fieldName": "newsletterDelivery",
      "title": "Choose how you would like your newsletter delivered",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [
        {
          "type": "ONE_OF",
          "params": {
            "options": [
              "Print",
              "Email"
            ]
          },
          "errorMessage": "Please select one of the values"
        }
      ],
      "options": [
        "Print",
        "Email",
        "Both"
      ],
      "optionsLink": 0,
      "setName": null,
      "requiredByDefault": false,
      "valuesCount": 66,
      "archived": false
    },
    {
      "fieldName": "AlertPreferences",
      "title": "Choose you delivery option for Pro Farmer alerts (*only available for Preferred and VIP members)",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [
        "Email",
        "Mobile",
        "Both"
      ],
      "optionsLink": 0,
      "setName": null,
      "requiredByDefault": false,
      "valuesCount": 69,
      "archived": false
    },
    {
      "fieldName": "donotcontactuser",
      "title": "Do Not Contact User",
      "comment": "",
      "editable": true,
      "dataType": "BOOLEAN",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": null,
      "requiredByDefault": false,
      "valuesCount": 5,
      "archived": false
    },
    {
      "fieldName": "migration_revenue_new",
      "title": "Migration Revenue",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Legacy_CMS",
      "requiredByDefault": false,
      "valuesCount": 5,
      "archived": false
    },
    {
      "fieldName": "achTransID",
      "title": "Braintree ACH Transaction ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Braintree_Fields",
      "requiredByDefault": false,
      "valuesCount": 17,
      "archived": false
    },
    {
      "fieldName": "BraintreeCustomerID",
      "title": "Braintree Customer ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Braintree_Fields",
      "requiredByDefault": false,
      "valuesCount": 1,
      "archived": false
    },
    {
      "fieldName": "BraintreeTransactionID",
      "title": "Braintree Transaction ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Braintree_Fields",
      "requiredByDefault": false,
      "valuesCount": 1,
      "archived": false
    },
    {
      "fieldName": "SalespersonID",
      "title": "Salesperson ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Braintree_Fields",
      "requiredByDefault": false,
      "valuesCount": 1,
      "archived": false
    },
    {
      "fieldName": "legacy_member_level",
      "title": "Member Level",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [
        "VIP",
        "Preferred",
        "Classic",
        "3 Month Try-Anything"
      ],
      "optionsLink": 0,
      "setName": "Legacy_CMS",
      "requiredByDefault": false,
      "valuesCount": 31,
      "archived": false
    },
    {
      "fieldName": "legacy_member_type",
      "title": "Member Type",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [
        "Member",
        "Trial",
        "Charter",
        "Group",
        "Lapsed",
        "COMP"
      ],
      "optionsLink": 0,
      "setName": "Legacy_CMS",
      "requiredByDefault": false,
      "valuesCount": 31,
      "archived": false
    },
    {
      "fieldName": "legacy_order_id",
      "title": "Legacy Order ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "Legacy_CMS",
      "requiredByDefault": false,
      "valuesCount": 31,
      "archived": false
    },
    {
      "fieldName": "legacy_tax_rate",
      "title": "Legacy Tax Rate",
      "comment": "",
      "editable": true,
      "dataType": "NUMBER",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": null,
      "requiredByDefault": false,
      "valuesCount": 1,
      "archived": true
    },
    {
      "fieldName": "order_status",
      "title": "Order Status",
      "comment": "",
      "editable": false,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [
        "Regular",
        "Convert",
        "New"
      ],
      "optionsLink": 0,
      "setName": "Legacy_CMS",
      "requiredByDefault": false,
      "valuesCount": 31,
      "archived": false
    },
    {
      "fieldName": "ProductChoice",
      "title": "Product Choice",
      "comment": "",
      "editable": true,
      "dataType": "SINGLE_SELECT_LIST",
      "validators": [],
      "options": [
        "Preferred -Print",
        "Preferred- Digital"
      ],
      "optionsLink": 0,
      "setName": "Legacy_CMS",
      "requiredByDefault": false,
      "valuesCount": 7,
      "archived": false
    },
    {
      "fieldName": "fjid",
      "title": "Farm Journal ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "ID_Fields",
      "requiredByDefault": false,
      "valuesCount": 33,
      "archived": false
    },
    {
      "fieldName": "frid",
      "title": "Farm Reach ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "ID_Fields",
      "requiredByDefault": false,
      "valuesCount": 32,
      "archived": false
    },
    {
      "fieldName": "pfid",
      "title": "Pro Farmer ID",
      "comment": "",
      "editable": true,
      "dataType": "TEXT",
      "validators": [],
      "options": [],
      "optionsLink": null,
      "setName": "ID_Fields",
      "requiredByDefault": false,
      "valuesCount": 23,
      "archived": false
    }
  ],
  "formsWithDefinitions": [
    {
      "form": {
        "formName": "MyAccountFields",
        "title": "My Account Form",
        "fieldsCount": 12
      },
      "formFieldDefinitions": [
        {
          "formName": "MyAccountFields",
          "fieldName": "phone_number",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 8
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "business_name",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 0
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "address1",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 1
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "city",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 3
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "country",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 2
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "us_state",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"United States\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [],
          "sortOrder": 4
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "canada_states",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"Canada\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [],
          "sortOrder": 6
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "us_zip_code",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"United States\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [
            {
              "type": "REGEXP",
              "params": {
                "options": [],
                "regexp": "^\\d{5}(?:[-\\s]\\d{4})?$"
              },
              "errorMessage": "Zip code field is not in the right format."
            }
          ],
          "sortOrder": 5
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "canada_postal_code",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"Canada\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [
            {
              "type": "REGEXP",
              "params": {
                "regexp": "^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ])\\ {0,1}(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$"
              },
              "errorMessage": "Postal code field is not in the right format."
            }
          ],
          "sortOrder": 7
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "AlertPreferences",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 10
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "newsletterDelivery",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 9
        },
        {
          "formName": "MyAccountFields",
          "fieldName": "mobilePhoneNew",
          "required": false,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "AlertPreferences",
                  "value": "[\"Mobile\"]"
                }
              ],
              "prefillContent": null
            },
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "AlertPreferences",
                  "value": "[\"Both\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [],
          "sortOrder": 11
        }
      ]
    },
    {
      "form": {
        "formName": "RegistrationFields",
        "title": "Registration Form",
        "fieldsCount": 14
      },
      "formFieldDefinitions": [
        {
          "formName": "RegistrationFields",
          "fieldName": "phone_number",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 10
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "business_name",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 0
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "address1",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 2
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "address2",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 9
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "city",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 3
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "country",
          "required": true,
          "rules": [],
          "validators": [],
          "sortOrder": 1
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "us_state",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"United States\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [],
          "sortOrder": 4
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "canada_states",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"Canada\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [],
          "sortOrder": 5
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "us_zip_code",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"United States\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [
            {
              "type": "REGEXP",
              "params": {
                "options": [],
                "regexp": "^\\d{5}(?:[-\\s]\\d{4})?$"
              },
              "errorMessage": "Zip code field is not in the right format."
            }
          ],
          "sortOrder": 6
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "canada_postal_code",
          "required": true,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "country",
                  "value": "[\"Canada\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [
            {
              "type": "REGEXP",
              "params": {
                "options": [],
                "regexp": "^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ])\\ {0,1}(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$"
              },
              "errorMessage": "Postal code field is not in the right format."
            }
          ],
          "sortOrder": 7
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "AlertPreferences",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 12
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "newsletterDelivery",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 11
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "achTransID",
          "required": false,
          "rules": [],
          "validators": [],
          "sortOrder": 8
        },
        {
          "formName": "RegistrationFields",
          "fieldName": "mobilePhoneNew",
          "required": false,
          "rules": [
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "AlertPreferences",
                  "value": "[\"Mobile\"]"
                }
              ],
              "prefillContent": null
            },
            {
              "actionType": "APPEAR",
              "prefillValue": null,
              "conditions": [
                {
                  "conditionType": "EQUALS",
                  "conditionValueSourceType": "FIELD",
                  "fieldName": "AlertPreferences",
                  "value": "[\"Both\"]"
                }
              ],
              "prefillContent": null
            }
          ],
          "validators": [],
          "sortOrder": 13
        }
      ]
    }
  ],
  "sets": [
    {
      "setName": "Address",
      "title": ""
    },
    {
      "setName": "Braintree_Fields",
      "title": ""
    },
    {
      "setName": "ID_Fields",
      "title": ""
    },
    {
      "setName": "Legacy_CMS",
      "title": ""
    },
    {
      "setName": "Phone",
      "title": ""
    }
  ]
}
var fieldData = JSON.stringify(fields)

var postFields = function (fieldData) {
  var postUrl = `https://api.tinypass.com/api/v3/publisher/customFields/update?api_token=mSqRYIKTKmChC0RSPzcJXBwJpzSWRrZnb8M9eOIz&aid=uDvUxuKKn2`

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

postFields(fieldData)