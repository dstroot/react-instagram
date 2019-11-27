global.fetch = fetch;
import 'isomorphic-fetch';

test('real fetch call', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const result = await res.json();
  expect(result.name).toBe('Leanne Graham'); // Success!
});

// import 'isomorphic-fetch';

// // // validate response
// // const validate = response => {
// //   if (!response.ok) throw Error(response.statusText);
// //   return response;
// // };

// // // return JSON
// // const getJSON = response => {
// //   return response.json();
// // };

// // function fetchInstagram({ username }) {
// //   return fetch(`https://www.instagram.com/${username}/?__a=1`)
// //     .then(validate)
// //     .then(getJSON);
// // }

// test('API Call', async () => {
//   // const URL = 'https://affectionate-aryabhata-c22561.netlify.com';
//   const username = 'ferrytalecreative';

//   // // query
//   // async function fetchNetlify({ username }) {
//   //   return (
//   //     await fetch(`${URL}/.netlify/functions/photos?username=${username}`)
//   //   ).json();
//   // }

//   // act (Use the asynchronous version of act to apply resolved promises)

//   const response = await fetch(
//     '/.netlify/functions/photos?username=${username}'
//     // {
//     //   mode: 'no-cors', // no-cors, *cors, same-origin
//     //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // }
//   );
//   // const respText = await response.text();
//   // console.log(JSON.stringify(respText));

//   const respJson = await response.json();
//   expect(respJson).toMatchSnapshot();
//   console.log(JSON.stringify(respJson));

//   // try {
//   //   // const response = fetchInstagram('ferrytalecreative');
//   //   // console.log('resp: ' + response);
//   //   // expect(response).toMatchSnapshot();

//   //   const response = await fetch(
//   //     '/.netlify/functions/photos?username=${username}'
//   //     // {
//   //     //   mode: 'no-cors', // no-cors, *cors, same-origin
//   //     //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   //     //   headers: {
//   //     //     'Content-Type': 'application/json',
//   //     //   },
//   //     // }
//   //   );
//   //   const respText = await response.text();
//   //   // const respJson = await response.json();
//   //   console.log(JSON.stringify(respText));
//   // } catch (e) {
//   //   console.log(e);
//   //   expect(e).toBeNull();
//   //   // expect(e).toEqual(new Error('shouldThrow was true'));
//   // }
// });
