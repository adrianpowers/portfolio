import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../index.css";

export default function Projects() {
  return (
    <main id="projects" className="bg-slate-300 px-10 scroll-smooth pb-5">
      <Header />

      <div id="header-text" className="text-center p-10">
        <h2 className="text-blue-900 drop-shadow-md text-5xl font-bold">
          Projects
        </h2>
      </div>

      <section className="flex flex-wrap grid-flow-col auto-cols-max justify-evenly pb-3">
        <div className="max-w-sm p-6 m-3 bg-slate-900 rounded-lg shadow text">
          <h5 className="mb-2 text-2xl font-bold text-blue-400 text-center">
            Periodic Tables
          </h5>
          <p className="mb-3 font-normal text-slate-300">
            A mock app for a fine dining restaurant reservation system. The
            software is meant to be operated by the restaurant staff when
            customers call in reservations.
          </p>
          <p className="mb-3 font-normal text-slate-300">
            <i>Frontend technologies</i> used include JavaScript and React.{" "}
            <i>Backend technologies</i> include Node.js, Express.js, Knex.js,
            and PostgreSQL. I was responsible for creating both stacks of the
            application.
          </p>
          <div className="text-center">
            <a
              href="https://github.com/adrianpowers/restaurant-reservation"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900"
            >
              GitHub Repo
            </a>
            <a
              href="https://periodic-tables-reservations-te1e.onrender.com/dashboard"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900"
            >
              Deployed Site
            </a>
          </div>
        </div>

        <div className="max-w-sm p-6 m-3 bg-slate-900 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold text-blue-400 text-center">
            We Love Movies
          </h5>
          <p className="mb-3 font-normal text-slate-300">
            A mock movie review and rating site. I was responsible for creating
            the RESTful API that powers the backend, as well as populating the
            database.
          </p>
          <p className="mb-3 font-normal text-slate-300">
            <i>Backend technologies</i> include Node.js, Express.js, Knex.js,
            and PostgreSQL. The database is hosted on ElephantSQL, a
            cloud-computing service.
          </p>
          <div className="text-center">
            <a
              href="https://github.com/adrianpowers/we-love-movies-back-end"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div className="max-w-sm p-6 m-3 bg-slate-900 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold text-blue-400 text-center">
            Decoder Ring
          </h5>
          <p className="mb-3 font-normal text-slate-300">
            An early-career practice in Algorithms. Implementation of three
            different ciphers: Caesar, Polybius, and Substitution. Done entirely
            in JavaScript.
          </p>
          <p className="mb-3 font-normal text-slate-300">
            <i>
              (For clarification: I did not create the frontend, just the
              substitution algorithms.)
            </i>
          </p>
          <div className="text-center">
            <a
              href="https://github.com/adrianpowers/decoder-ring"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900"
            >
              GitHub Repo
            </a>
            <a
              href="https://adrianpowers.github.io/decoder-ring/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900"
            >
              Deployed Site
            </a>
          </div>
        </div>
        
        <div>
          <div className="max-w-sm p-6 m-3 bg-slate-900 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold text-blue-400 text-center">
              Flashcard-O-Matic
            </h5>
            <p className="mb-3 font-normal text-slate-300">
              A flashcard application. Utilizes CRUDL functions to create decks,
              cards, and study sessions. I was responsible only for the
              frontend, working entirely in JavaScript and React.
            </p>
            <p className="mb-3 font-normal text-slate-300">
              <i>Frontend technologies</i> used include JavaScript and React.{" "}
            </p>
            <div className="text-center">
              <a
                href="https://github.com/adrianpowers/flashcard-o-matic"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="max-w-sm p-6 m-3 bg-slate-900 rounded-lg shadow text">
            <h5 className="mb-2 text-2xl font-bold text-blue-400 text-center">
              Advent of Code 2022
            </h5>
            <p className="mb-3 font-normal text-center text-slate-300">
              18/50 stars, all using JavaScript.
            </p>
            <div className="text-center">
              <a
                href="https://github.com/adrianpowers/advent-of-code-2022"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-600 active:bg-blue-900"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
