# React Instagram

This demo shows how to use the Instragram API to create an interesting and dynamic background for a web application.  For example, if you were creating a web store and you wanted to have a direct tie between images posted on Instagram and your store.  I like to encourage learning to code with my daughter and she gave me the idea, hence we used Kylie Jenner as our example.  We built it so you could **test your own Instagram** by entering your Instagram name in the input.

It's fully fluid and will dynamically adjust to **any screen**.  The font's are fluid as well as the size, configuration and quality of the images.  Try resizing your browser.

We deployed it on Netlify since that gives us a simple way to deploy our lambda function as well as give us https support.

### Testing

As with all my demos it has a full test suite:

```sh
 PASS  src/App.test.js
 PASS  src/components/InstagramBackground/index.test.js
 PASS  src/components/BackgroundWash/index.test.js
 PASS  src/components/InstaForm/index.test.js
 PASS  src/pages/Home/index.test.js
 PASS  src/lambda/photos.test.js

Test Suites: 6 passed, 6 total
Tests:       8 passed, 8 total
Snapshots:   6 passed, 6 total
Time:        1.316s
Ran all test suites.
```

### Notes

* Input is validated and sanitized (all code requires security). You cannot enter more than 30 characters, which is the maximum length of an instagram name and you can only enter letters, numbers, underscore or a period.
* Netlify Lamda function was created to cache the API call so we don't get blocked by Instagram for too many API calls, and also to avoid corporate web blocking.
* Uses netlify's tools to operate a local dev environment for our lambda function
  * Build run `netlify-lambda build`
  * Run `yarn lambda` in one terminal session
  * Run `yarn start` in another
* Uses React suspense. Using react-query we can call our API with suspense support.  However we don't want any fallback UI so this was a bit strange.  In any case it seem to make things faster overall.
* We **preload** the API call in the head so the site is faster.  See index.html in /public.

### Resources

* [Netlify Lambda](https://github.com/netlify/netlify-lambda)
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
