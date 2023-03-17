import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import "../index.css";

export default function Header({ darkMode, setDarkMode }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <h1 className="text-3xl text-blue-900 dark:text-blue-300 transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700 drop-shadow-lg font-bold">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Adrian Powers
        </Link>
      </h1>
      <nav>
        {/* Mobile-sized Hamburger Menu */}
        <section className="flex lg:hidden">
          <div className="my-[6px] mr-3">
            {darkMode ? (
              <BsSun
                className="text-blue-400 drop-shadow-lg cursor-pointer text-2xl transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <BsFillMoonStarsFill
                className="text-blue-800 drop-shadow-lg cursor-pointer text-2xl transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700"
                onClick={() => setDarkMode(true)}
              />
            )}
          </div>
          <div onClick={() => setNavOpen((prev) => !prev)}>
            <GiHamburgerMenu className="text-4xl text-blue-900 dark:text-blue-500 drop-shadow-md mr-3" />
          </div>

          <div className={navOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <h1 className="text-3xl text-blue-200">X</h1>
            </div>
            <ul className="flex flex-col items-center justify-between">
              <li className="text-blue-300 text-2xl my-8 active:text-blue-700">
                <HashLink
                  to="/#skills-and-languages"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Skills & Languages
                </HashLink>
              </li>
              <li className="text-blue-300 text-2xl my-8 active:text-blue-700">
                <Link
                  to="/projects"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Projects
                </Link>
              </li>
              <li className="text-blue-300 text-2xl my-8 active:text-blue-700">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Desktop-sized Header Menu */}
        <ul className="hidden space-x-6 lg:flex">
          <li className="text-blue-900 dark:text-blue-400 font-semibold text-1xl my-8 transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700 dark:hover:text-blue-500 dark:active:text-blue-700">
            <HashLink
              to="/#skills-and-languages"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Skills & Languages
            </HashLink>
          </li>
          <li className="text-blue-900 dark:text-blue-400 font-semibold text-1xl my-8 transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700 dark:hover:text-blue-500 dark:active:text-blue-700">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Projects
            </Link>
          </li>
          <li className="text-blue-900 dark:text-blue-400 font-semibold text-1xl my-8 transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700 dark:hover:text-blue-500 dark:active:text-blue-700">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
          <li className="darkModeToggleBtn">
            {darkMode ? (
              <BsSun
                className="text-blue-400 drop-shadow-lg cursor-pointer text-2xl my-8 transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <BsFillMoonStarsFill
                className="text-blue-800 drop-shadow-lg cursor-pointer text-2xl my-8 transition ease-in-out duration-250 hover:text-blue-500 active:text-blue-700"
                onClick={() => setDarkMode(true)}
              />
            )}
          </li>
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/e/2PACX-1vQSEtg9iFOud1mpV9UfrpV-NpTROnho0JfERK5FxGyItnTVwTcgtiSPlN--DRYht-qcIwH8c_cJQJ-9/pub"
              rel="noreferrer"
            >
              <button
                type="button"
                className="text-slate-200 font-semibold drop-shadow-lg bg-gradient-to-br from-blue-600 to-slate-800 
            transition ease-in-out duration-250 hover:from-blue-500  hover:to-blue-500 active:from-blue-700 active:to-blue-700
            rounded-br-2xl rounded-tl-2xl rounded-bl-sm rounded-tr-sm text-xl px-4 py-2 my-4"
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Resume
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
