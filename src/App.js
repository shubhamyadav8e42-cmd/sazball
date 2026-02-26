function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      <header style={{ 
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h1 style={{ margin: 0 }}>SAZBALL 🏏🔥</h1>
        <nav>
          <a href="/live" style={{color:"white", margin:"0 15px"}}>Live</a>
          <a href="/momentum" style={{color:"white", margin:"0 15px"}}>Momentum</a>
          <a href="/stats" style={{color:"white", margin:"0 15px"}}>Stats</a>
          <a href="/insights" style={{color:"white", margin:"0 15px"}}>Insights</a>
        </nav>
      </header>

      <main style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Welcome to SAZBALL</h2>
        <p>Attack. Persist. Dominate.</p>
        <p>Real-time cricket intelligence platform.</p>
      </main>

    </div>
  );
}

export default App;
