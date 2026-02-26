import { useState, useEffect } from "react";

function Live() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/live")
      .then(res => res.json())
      .then(data => {
        setMatches(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading live matches...</p>;
  if (!matches.length) return <p>No live matches now 😌</p>;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Live Matches 🏏🔥</h2>
      {matches.map((m, index) => (
        <div key={index} style={{
          border: "1px solid #ddd",
          padding: "12px",
          margin: "10px",
          borderRadius: "8px"
        }}>
          <h4>{m.name}</h4>
          {m.score ? <p>Score: {m.score}</p> : null}
          <p>Status: {m.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Live;
