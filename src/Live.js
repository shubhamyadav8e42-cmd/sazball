import { useState, useEffect } from "react";

function Live() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "a9a9e81c-fff8-4e14-a06d-3d1d6c7bb8c5"; // ← replace with your API key

  useEffect(() => {
    fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`)
      .then(res => res.json())
      .then(data => {
        setMatches(data.data || []); // data.data me matches hote hain
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading live matches...</p>;
  if (!matches.length) return <p>No live matches currently 😌</p>;

  return (
    <div>
      <h2>Live Matches 🏏🔥</h2>
      {matches.map((match, index) => (
        <div key={index} style={{
          border:"1px solid gray",
          padding:"15px",
          margin:"10px",
          borderRadius:"10px",
          background: "#f0f8ff"
        }}>
          <h3>{match.name}</h3>
          <p>{match.status}</p>
          {match.score ? <p>Score: {match.score}</p> : null}
          <p>Venue: {match.venue}</p>
        </div>
      ))}
    </div>
  );
}

export default Live;
