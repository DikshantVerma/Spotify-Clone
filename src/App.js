import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotifyaccess";

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I have a token", token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
