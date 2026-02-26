import fetch from "node-fetch";

export default async function handler(req, res) {
  const API_KEY = "a9a9e81c-fff8-4e14-a06d-3d1d6c7bb8c5";  // ← apni key yahan daal
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API fetch failed" });
  }
}
