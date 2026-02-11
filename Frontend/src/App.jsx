import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import "./index.css";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Article/Article";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  );
}

export default App;
