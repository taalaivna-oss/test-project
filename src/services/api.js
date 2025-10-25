const API_URL = "https://swapi.dev/api";

export async function getPeople() {
  const res = await fetch(`${API_URL}/people/`);
  return res.json();
}

export async function getPerson(id) {
  const res = await fetch(`${API_URL}/people/${id}/`);
  return res.json();
}

export async function getPlanets() {
  const res = await fetch(`${API_URL}/planets/`);
  return res.json();
}

export async function getPlanet(id) {
  const res = await fetch(`${API_URL}/planets/${id}/`);
  return res.json();
}

export async function getStarships() {
  const res = await fetch(`${API_URL}/starships/`);
  return res.json();
}

export async function getStarship(id) {
  const res = await fetch(`${API_URL}/starships/${id}/`);
  return res.json();
}
