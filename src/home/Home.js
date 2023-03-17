import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import SkillsAndLanguages from "./SkillsAndLanguages";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../index.css";

export default function Home({ darkMode, setDarkMode }) {

  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div className={"bg-slate-300 dark:bg-slate-900 px-10 scroll-smooth"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
        <HeroSection />

        <SkillsAndLanguages />

        <div className="pb-5">
          <h1 className="text-2xl text-center text-blue-900 dark:text-slate-300 font-semibold drop-shadow-md pt-3 pb-5">
            You can check my projects in the
            <a
              href="/projects"
              className="text-blue-600 dark:text-blue-500"
              style={{ textDecoration: "none" }}
            >
              {" "}
              projects tab
            </a>
            , or reach out{" "}
            <Link
              to="/contact"
              className="text-blue-600 dark:text-blue-500"
              style={{ textDecoration: "none" }}
            >
              {" "}
              here{" "}
            </Link>
            and at any of the social links below!{" "}
          </h1>
          <Footer />
        </div>
      </div>
    </main>
  );
}
