const fetch = require('node-fetch');

let cache = {}; // Defined outside the function globally

// Handler
// Netlify provides the event and context parameters when the serverless
// function is invoked. You provide the callback parameter, which is
// optional, but recommended.

// Event object looks like this:
// {
//   "path": "Path parameter",
//   "httpMethod": "Incoming request's method name"
//   "headers": {Incoming request headers}
//   "queryStringParameters": {query string parameters}
//   "body": "A JSON string of the request payload."
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }

exports.handler = async function(event, context, callback) {
  try {
    const { username } = event.queryStringParameters;
    if (cache[username]) {
      return {
        headers: {
          'USED-CACHE': 'true',
        },
        statusCode: 200,
        body: JSON.stringify(cache[username]),
      };
    }

    const response = await fetch(
      `https://www.instagram.com/${username}/?__a=1`,
      {
        headers: {
          Accept: 'application/json',
          // Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
        },
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();
    cache[username] = data;

    return {
      headers: {
        'USED-CACHE': 'false',
      },
      statusCode: 200,
      body: JSON.stringify(username),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
