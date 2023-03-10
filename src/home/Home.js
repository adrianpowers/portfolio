import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import headshot from "../headshot.png";
import SkillsAndLanguages from "./SkillsAndLanguages";
import Header from "../Header";
import Footer from "../Footer";
import "../index.css";

export default function Home() {
  return (
    <main className="bg-slate-300 px-10 scroll-smooth">
      <Header />

      <section id="homepage" className=" bg-slate-300 mb-10">
        <div id="hero-section" className="text-center p-10">
          <h2 className="text-blue-900 drop-shadow-md text-5xl pt-2 font-bold">
            Adrian Powers
          </h2>
          <h3 className="text-blue-700 drop-shadow-md text-2xl font-semibold pb-3">
            Full-Stack Developer
          </h3>
          <p className="text-slate-800 text-lg font-semibold py-2 leading-6">
            Former animator and artist turned programmer: I've got a keen eye
            for UI/UX and design and I've got what it takes to make your
            frontend pop!
            <br />
            <br />
            Wait...need some help in the backend? Never fear: RESTful APIs and
            SQL databases are my jam, too!
            <br />
            <br />
            Wherever you need a new coder in your pipeline, I can fill the gap
            with my passion, drive, and determination.
          </p>
        </div>

        <div
          id="social-icons"
          className="text-5xl flex justify-center gap-16 drop-shadow-md text-blue-700"
        >
          <a
            target="_blank"
            href="https://github.com/adrianpowers"
            rel="noreferrer"
          >
            <FaGithub className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700" />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/adrianpowers530"
            rel="noreferrer"
          >
            <FaLinkedin className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700" />
          </a>
          <a href="/contact">
            <AiOutlineMail className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700" />
          </a>
        </div>

        <div
          id="headshot"
          className="grayscale-[50%] transition ease-in-out hover:grayscale-0 relative max-w-xs pt-10 mx-auto"
        >
          <img
            src={headshot}
            alt="A dapperly dressed programmer in front of trees."
          />
        </div>
      </section>

      <SkillsAndLanguages />

      <div className="pb-5">
        <h1 className="text-2xl text-center text-blue-900 font-semibold drop-shadow-md pt-3 pb-5">
          You can check my projects in the
          <a
            href="/projects"
            className="text-blue-600"
            style={{ textDecoration: "none" }}
          >
            {" "}
            projects tab
          </a>
          , or reach out{" "}
          <a
            href="/contact"
            className="text-blue-600"
            style={{ textDecoration: "none" }}
          >
            {" "}
            here
          </a>
          <br />
          and at any of the social links below!
          {" "}
          {" "}
        </h1>
        <Footer />
      </div>
    </main>
  );
}
