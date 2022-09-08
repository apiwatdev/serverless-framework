
require('dotenv').config()
const AWS = require("aws-sdk");
AWS.config.region = 'ap-southeast-1'
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
const params = {
  ClientId: process.env.CLIENT_ID,
  AuthFlow: "USER_PASSWORD_AUTH",
  AuthParameters: {
    USERNAME: "admin_create_2",
    PASSWORD: "P@ssw0rd",
  },
};

cognitoidentityserviceprovider.initiateAuth(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});

// var params = {
//     AuthFlow: USER_SRP_AUTH | REFRESH_TOKEN_AUTH | REFRESH_TOKEN | CUSTOM_AUTH | ADMIN_NO_SRP_AUTH | USER_PASSWORD_AUTH | ADMIN_USER_PASSWORD_AUTH, /* required */
//     ClientId: 'STRING_VALUE', /* required */
//     AnalyticsMetadata: {
//       AnalyticsEndpointId: 'STRING_VALUE'
//     },
//     AuthParameters: {
//       '<StringType>': 'STRING_VALUE',
//       /* '<StringType>': ... */
//     },
//     ClientMetadata: {
//       '<StringType>': 'STRING_VALUE',
//       /* '<StringType>': ... */
//     },
//     UserContextData: {
//       EncodedData: 'STRING_VALUE',
//       IpAddress: 'STRING_VALUE'
//     }
//   };
//   cognitoidentityserviceprovider.initiateAuth(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//   });
