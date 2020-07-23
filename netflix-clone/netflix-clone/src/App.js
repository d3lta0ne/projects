import React from "react";
import "./styles/App.css";
import Row from "./components/Row.js";
import requests from "./requests.js";

function App() {
  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
