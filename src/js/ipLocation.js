// https://api.ipgeolocation.io/ipgeo?apiKey=cd6d9b2cc9a94dcbbbc891c56d26e49c

export default async () => {
  let res = await fetch("https://localhost:7777/geo/");
  return res.json();
};
