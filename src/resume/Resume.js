import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../index.css"

export default function Resume({ darkMode, setDarkMode }) {
  return (
    <main className="bg-slate-300 px-10 scroll-smooth">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className="text-blue-900 text-center drop-shadow-md text-5xl py-4 font-bold">Resume Page - In Progress!</h1>
      <Footer />
    </main>
  );
}