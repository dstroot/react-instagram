// validate response
const validate = response => {
  if (!response.ok) throw Error(response.statusText);
  return response;
};

// return JSON
const getJSON = response => {
  return response.json();
};

/**
 * Queries: two diferent ways to write them,
 *          Second way is not checking errors.
 */

export function fetchInstagram({ username }) {
  return fetch(`https://www.instagram.com/${username}/?__a=1`)
    .then(validate)
    .then(getJSON);
}

// export async function fetchInstagram({ username }) {
//   return (await fetch(`https://www.instagrm.com/${username}/?__a=1`)).json();
// }

export async function fetchNetlify({ username }) {
  return (
    await fetch(`/.netlify/functions/photos?username=${username}`)
  ).json();
}
