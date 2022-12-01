import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Form from "./components/routes/Form";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Form />} />

    </Routes>
  );
}

export default App;
