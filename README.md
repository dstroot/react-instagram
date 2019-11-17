This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* Netlify Lamda function to basically cache the API call so we don't get blocked by Instagram for too many API calls, and also to get around crazy corporate web blocking.
* Uses netlify's tools to operate a local dev environment for our lambda function
  * Run `yarn lambda` in one terminal session
  * Run `yarn start` in another
* Uses React suspense. Using react-query we can call our API with suspense support.

### Resources

* [Netlify Lambda](https://github.com/netlify/netlify-lambda)
