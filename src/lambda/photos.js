import fetch from 'node-fetch';

let cache = {}; // Defined outside the function globally
const hour = 60 * 60 * 1000;

// Netlify provides the "event" and "context" parameters when the serverless
// handler function is invoked.

// Event object looks like this:
// {
//   "path": "Path parameter",
//   "httpMethod": "Incoming request's method name"
//   "headers": {Incoming request headers}
//   "queryStringParameters": {query string parameters}
//   "body": "A JSON string of the request payload."
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }

// Callback looks like this:
// {
//   "isBase64Encoded": true|false,
//   "statusCode": httpStatusCode,
//   "headers": { "headerName": "headerValue", ... },
//   "body": "..."
// }

exports.handler = async function(event, context) {
  const { username } = event.queryStringParameters;
  try {
    // check if it's cached first
    if (cache[username]) {
      const cachedData = JSON.parse(cache[username]);

      // cache for 4 hours
      const expired = cachedData.timestamp + hour * 4;
      const now = Date.now(); // see note below

      if (now < expired) {
        return {
          headers: {
            'USED-CACHE': 'true',
          },
          statusCode: 200,
          body: JSON.stringify(cachedData.json),
        };
      }

      // return {
      //   headers: {
      //     'USED-CACHE': 'true',
      //   },
      //   statusCode: 200,
      //   body: JSON.stringify(cache[username]),
      // };
    }

    // otherwise go get it and cache it
    const response = await fetch(
      `https://www.instagram.com/${username}/?__a=1`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();
    // cache[username] = data;

    cache[username] = JSON.stringify({
      json: data,
      timestamp: Date.now(),
    });

    return {
      headers: {
        'USED-CACHE': 'false',
      },
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log('Function name: ', context.functionName);
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
