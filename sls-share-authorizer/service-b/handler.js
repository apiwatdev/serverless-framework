"use strict";

module.exports.public = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.private = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v2.0! Your function executed successfully!",
          input: event,
        },
        null,
        2
      ),
    };
  };