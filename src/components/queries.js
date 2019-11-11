export async function fetchInstagram({ username }) {
  return (await fetch(`https://www.instagram.com/${username}/?__a=1`)).json();
}

export async function fetchNetlify({ username }) {
  return (await fetch(
    `/.netlify/functions/photos?username=${username}`
  )).json();
}
