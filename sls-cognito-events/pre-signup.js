module.exports.run = (event, context, callback) => {
  // Confirm the user
  event.response.autoConfirmUser = true;



  if (event.request.userAttributes.hasOwnProperty("email")) {
    event.response.autoVerifyEmail = true;
  }

  // Set the phone number as verified if it is in the request
  if (event.request.userAttributes.hasOwnProperty("phone_number")) {
    event.response.autoVerifyPhone = true;
  }


  
  console.log(event);
  callback(null, event);
};
