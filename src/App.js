import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="projects" element={<Projects darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="resume" element={<Resume darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App;
