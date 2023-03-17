import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Form from "./Form";
import "../index.css";

export default function Contact({ darkMode, setDarkMode }) {
  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-slate-300 dark:bg-slate-900 px-10 scroll-smooth">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Form />
        <Footer />
      </div>
    </main>
  );
}
