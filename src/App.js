import React from "react";
import "./styles.css";

import { Sidebar } from "./components/sidebar";
import Navbar from "./components/navbar";
import { ThumbContainer } from "./components/thumb-container";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <ThumbContainer />
    </div>
  );
}

export default App;