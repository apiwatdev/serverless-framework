require('dotenv').config()
const AWS = require("aws-sdk");
AWS.config.region = "ap-southeast-1";
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const params = {
  UserPoolId: process.env.USER_POOL_ID,
  Username: "admin_create_2",
  TemporaryPassword: "P@ssw0rd",
  ForceAliasCreation: false,
  DesiredDeliveryMediums: [],
  MessageAction: "SUPPRESS",
  UserAttributes: [
    {
      Name: "email",
      Value: "it.XXX.XXX@gmail.com",
    },
    {
      Name: "email_verified",
      Value: "true",
    },
    {
      Name: "custom:sub_2",
      Value: "6319763164ce809b6b561016",
    },
    // {
    //   Name: "phone_number_verified",
    //   Value: "true",
    // },
  ],
  ValidationData: [
    {
      Name: "type",
      Value: "test_user",
    },
  ],
};

cognitoidentityserviceprovider.adminCreateUser(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(JSON.stringify(data)); // successful response
});

// var params = {
//     UserPoolId: 'STRING_VALUE', /* required */
//     Username: 'STRING_VALUE', /* required */
//     ClientMetadata: {
//       '<StringType>': 'STRING_VALUE',
//       /* '<StringType>': ... */
//     },
//     DesiredDeliveryMediums: [
//       SMS | EMAIL,
//       /* more items */
//     ],
//     ForceAliasCreation: true || false,
//     MessageAction: RESEND | SUPPRESS,
//     TemporaryPassword: 'STRING_VALUE',
//     UserAttributes: [
//       {
//         Name: 'STRING_VALUE', /* required */
//         Value: 'STRING_VALUE'
//       },
//       /* more items */
//     ],
//     ValidationData: [
//       {
//         Name: 'STRING_VALUE', /* required */
//         Value: 'STRING_VALUE'
//       },
//       /* more items */
//     ]
//   };
