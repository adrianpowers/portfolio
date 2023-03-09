import React, { useState } from 'react';
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiNodedotjs,
  SiNodemon,
  SiPostgresql,
  SiExpress,
  SiVisualstudio,
  SiMocha,
  SiChai,
  SiJest,
  SiNpm,
  SiYarn,
  SiVercel,
} from "react-icons/si";
import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import '../index.css';

export default function SkillsAndLanguages() {
  const [languagesText, setLanguagesText] = useState("*");
  const [frontendText, setFrontendText] = useState("*");
  const [backendText, setBackendText] = useState("*");
  const [toolsText, setToolsText] = useState("*");

  return (
    <section>
      <div>
        <h3
          id="skills-and-languages"
          className="text-blue-900 drop-shadow-md text-3xl font-bold text-center my-10"
        >
          Skills and Languages
        </h3>
      </div>

      <div className="">
        <h2 className="text-slate-800 drop-shadow-md text-2xl font-semibold text-center pb-4">
          Languages
        </h2>
      </div>

      {/* icons go here */}
      <div>
        <ul className="flex justify-center">
          <li
            onMouseEnter={() => setLanguagesText("JavaScript")}
            onMouseLeave={() => setLanguagesText("*")}
          >
            <DiJavascript1 className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setLanguagesText("TypeScript")}
            onMouseLeave={() => setLanguagesText("*")}
          >
            <SiTypescript className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setLanguagesText("Python")}
            onMouseLeave={() => setLanguagesText("*")}
          >
            <DiPython className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
        </ul>
        <p
          className={
            languagesText !== "*"
              ? "show-text text-center text-lg pt-4"
              : "hide-text text-lg pt-4"
          }
        >
          {languagesText}
        </p>
      </div>

      <div className="">
        <h2 className="text-slate-800 drop-shadow-md text-2xl font-semibold text-center py-4">
          Frontend
        </h2>
      </div>

      <div>
        <ul className="flex justify-center">
          <li
            onMouseEnter={() => setFrontendText("HTML 5")}
            onMouseLeave={() => setFrontendText("*")}
          >
            <DiHtml5 className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setFrontendText("CSS 3")}
            onMouseLeave={() => setFrontendText("*")}
          >
            <DiCss3 className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setFrontendText("React")}
            onMouseLeave={() => setFrontendText("*")}
          >
            <DiReact className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setFrontendText("Next.js")}
            onMouseLeave={() => setFrontendText("*")}
          >
            <SiNextdotjs className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setFrontendText("Bootstrap")}
            onMouseLeave={() => setFrontendText("*")}
          >
            <SiBootstrap className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setFrontendText("Tailwind CSS")}
            onMouseLeave={() => setFrontendText("*")}
          >
            <SiTailwindcss className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
        </ul>
        <p
          className={
            frontendText !== "*"
              ? "show-text text-center text-lg pt-4"
              : "hide-text text-lg pt-4"
          }
        >
          {frontendText}
        </p>
      </div>

      <div className="">
        <h2 className="text-slate-800 drop-shadow-md text-2xl font-semibold text-center py-4">
          Backend
        </h2>
      </div>

      {/* icons go here */}
      <div>
        <ul className="flex justify-center">
          <li
            onMouseEnter={() => setBackendText("Node.js")}
            onMouseLeave={() => setBackendText("*")}
          >
            <SiNodedotjs className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setBackendText("Nodemon")}
            onMouseLeave={() => setBackendText("*")}
          >
            <SiNodemon className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setBackendText("Express")}
            onMouseLeave={() => setBackendText("*")}
          >
            <SiExpress className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setBackendText("PostgreSQL")}
            onMouseLeave={() => setBackendText("*")}
          >
            <SiPostgresql className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
        </ul>
        <p
          className={
            backendText !== "*"
              ? "show-text text-center text-lg pt-4"
              : "hide-text text-lg pt-4"
          }
        >
          {backendText}
        </p>
      </div>

      <div className="">
        <h2 className="text-slate-800 drop-shadow-md text-2xl font-semibold text-center py-4">
          Tools
        </h2>
      </div>

      {/* icons go here */}
      <div>
        <ul className="flex justify-center">
          <li
            onMouseEnter={() => setToolsText("Visual Studio Code")}
            onMouseLeave={() => setToolsText("*")}
          >
            <SiVisualstudio className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("Git")}
            onMouseLeave={() => setToolsText("*")}
          >
            <FaGitAlt className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("GitHub")}
            onMouseLeave={() => setToolsText("*")}
          >
            <FaGithub className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("Mocha")}
            onMouseLeave={() => setToolsText("*")}
          >
            <SiMocha className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("Chai")}
            onMouseLeave={() => setToolsText("*")}
          >
            <SiChai className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("Jest")}
            onMouseLeave={() => setToolsText("*")}
          >
            <SiJest className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("Node Package Manager")}
            onMouseLeave={() => setToolsText("*")}
          >
            <SiNpm className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("Yarn")}
            onMouseLeave={() => setToolsText("*")}
          >
            <SiYarn className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
          <li
            onMouseEnter={() => setToolsText("Vercel")}
            onMouseLeave={() => setToolsText("*")}
          >
            <SiVercel className="text-blue-700 drop-shadow-lg mx-2 text-5xl" />
          </li>
        </ul>
        <p
          className={
            toolsText !== "*"
              ? "show-text text-center text-lg pt-4"
              : "hide-text text-lg pt-4"
          }
        >
          {toolsText}
        </p>
      </div>
    </section>
  );
}
