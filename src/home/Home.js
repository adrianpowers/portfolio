import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import headshot from "../headshot.png";
import SkillsAndLanguages from "./SkillsAndLanguages";
import Header from "../Header";

export default function Home() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="bg-slate-300 px-10 scroll-smooth">
      <section className=" bg-slate-300 pb-10 mb-10">

        <Header />

        <div className="text-center p-10">
          <h2 className="text-blue-900 drop-shadow-md text-5xl pt-2 font-bold">
            Adrian Powers
          </h2>
          <h3 className="text-blue-700 drop-shadow-md text-2xl font-semibold">
            Full-Stack Developer
          </h3>
          <p className="text-slate-800 text-md py-5 leading-5">
            Former animator and artist turned programmer: I've got a keen eye
            for UI/UX and design and I've got what it takes to make your
            projects pop!
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 drop-shadow-md text-blue-700">
          <a target="_blank" href="https://github.com/adrianpowers">
            <FaGithub className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700" />
          </a>
          <a target="_blank" href="https://linkedin.com/in/adrianpowers530">
            <FaLinkedin className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700" />
          </a>
          <AiOutlineMail className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700" />
          {/* MAKE THAT A LINK TO A CONTACT FORM */}
        </div>

        <div className="grayscale-[50%] transition ease-in-out hover:grayscale-0 relative h-80 w-80 pt-10 mx-auto">
          <img src={headshot} alt="A dapperly dressed programmer in front of trees."/>
        </div>
      </section>

      <SkillsAndLanguages />

    </main>
  );
}
