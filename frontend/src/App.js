import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LetterPage from "./components/LetterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/letter/:letterId" element={<LetterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;