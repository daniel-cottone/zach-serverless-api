'use strict';
const _ = require('lodash');

module.exports.hello = (event, context, callback) => {
  const testArr = _.chunk(['a', 'b', 'c', 'd'], 2);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
      testArr
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
