import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Form from "./Form";
import "../index.css";

export default function Contact() {
  return (
    <main className="bg-slate-300 px-10 scroll-smooth">
      <Header />
      <Form />
      <Footer />
    </main>
  );
}
