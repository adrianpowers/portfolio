import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SocialIcons() {
  return (
    <div
      id="social-icons"
      className="text-5xl flex justify-center gap-16 drop-shadow-md text-blue-700 dark:text-blue-500"
    >
      <a target="_blank" href="https://github.com/adrianpowers" rel="noreferrer">
        <FaGithub className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700 dark:hover:text-blue-700" />
      </a>
      <a
        target="_blank"
        href="https://linkedin.com/in/adrianpowers530"
        rel="noreferrer"
      >
        <FaLinkedin className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700 dark:hover:text-blue-700" />
      </a>
      <Link to="/contact">
        <AiOutlineMail className="transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700 dark:hover:text-blue-700" />
      </Link>
    </div>
  )
}
