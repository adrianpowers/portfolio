import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ProjectCard from "./ProjectCard";
import "../index.css";

export default function Projects({ darkMode, setDarkMode }) {
  return (
    <main className={`${darkMode ? "dark" : ""}`}>
      <div
        id="projects"
        className="bg-slate-300 dark:bg-slate-900 px-10 scroll-smooth pb-5"
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div id="header-text" className="text-center p-10">
          <h2 className="text-blue-900 dark:text-blue-300 drop-shadow-md text-5xl font-bold">
            Projects
          </h2>
        </div>

        <section className="flex flex-wrap grid-flow-col auto-cols-max justify-evenly pb-3">
          <ProjectCard
            title="Periodic Tables"
            description="A mock app for a fine dining restaurant reservation system. The
              software is meant to be operated by the restaurant staff when
              customers call in reservations. Frontend technologies used include JavaScript and React.
              Backend technologies include Node.js, Express.js, Knex.js,
              and PostgreSQL. I was responsible for creating both stacks of the
              application."
            githubLink={"https://github.com/adrianpowers/restaurant-reservation"}
            siteLink={"https://periodic-tables-reservations-te1e.onrender.com/dashboard"}
          />

          <ProjectCard
            title="We Love Movies"
            description={`A mock movie review and rating site. I was responsible for
            creating the RESTful API that powers the backend, as well as
            populating the database. Backend technologies include Node.js, Express.js, Knex.js,
            and PostgreSQL. The database is hosted on ElephantSQL, a
            cloud-computing service.`}
            githubLink={"https://github.com/adrianpowers/we-love-movies-back-end"}
          />

          <ProjectCard
            title="Decoder Ring"
            description={`An early-career practice in Algorithms. Implementation of three
            different ciphers: Caesar, Polybius, and Substitution. Done
            entirely in JavaScript.`}
            githubLink={"https://github.com/adrianpowers/decoder-ring"}
            siteLink={"https://adrianpowers.github.io/decoder-ring/"}
          />

          <div>
            <ProjectCard
              title="Flashcard-O-Matic"
              description={`A flashcard application. Utilizes CRUDL functions to create
              decks, cards, and study sessions. I was responsible only for the
              frontend, working entirely in JavaScript and React.`}
              githubLink={"https://github.com/adrianpowers/flashcard-o-matic"}
            />

            <ProjectCard
              title="Advent of Code 2022"
              description={`18/50 stars, all using JavaScript. Actively updating over time!`}
              githubLink={"https://github.com/adrianpowers/advent-of-code-2022"}
            />
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
