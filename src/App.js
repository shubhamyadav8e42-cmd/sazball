import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Live from "./Live";
function Home() {
  return <h2>Welcome to SAZBALL Home</h2>;
}

function Momentum() {
  return <h2>Momentum Page 🔥</h2>;
}

function Stats() {
  return <h2>Stats Page 📊</h2>;
}

function Insights() {
  return <h2>Insights Page 🧠</h2>;
}

function App() {
  return (
    <Router>
      <header style={{ 
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1>SAZBALL 🏏🔥</h1>
        <nav>
          <Link to="/live" style={{color:"white", margin:"0 15px"}}>Live</Link>
          <Link to="/momentum" style={{color:"white", margin:"0 15px"}}>Momentum</Link>
          <Link to="/stats" style={{color:"white", margin:"0 15px"}}>Stats</Link>
          <Link to="/insights" style={{color:"white", margin:"0 15px"}}>Insights</Link>
        </nav>
      </header>

      <main style={{ textAlign: "center", marginTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/momentum" element={<Momentum />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
