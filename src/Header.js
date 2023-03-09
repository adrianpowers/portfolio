import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <h1 className="text-3xl text-blue-900 drop-shadow-lg font-bold">
        Adrian Powers
      </h1>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div onClick={() => setNavOpen((prev) => !prev)}>
            <GiHamburgerMenu className="text-4xl text-blue-900 drop-shadow-md mr-3" />
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
                <a href="#skills-and-languages">Skills & Languages</a>
              </li>
              <li className="text-blue-300 text-2xl my-8 active:text-blue-700">
                <a href="/projects">Projects</a>
              </li>
              <li className="text-blue-300 text-2xl my-8 active:text-blue-700">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="hidden space-x-6 lg:flex">
          <li className="text-blue-900 font-semibold text-1xl my-8 transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700">
            <a href="#skills-and-languages">Skills & Languages</a>
          </li>
          <li className="text-blue-900 font-semibold text-1xl my-8 transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700">
            <a href="/projects">Projects</a>
          </li>
          <li className="text-blue-900 font-semibold text-1xl my-8 transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700">
            <a href="/contact">Contact</a>
          </li>
          <li>
            <BsFillMoonStarsFill className="text-blue-800 drop-shadow-lg cursor-pointer text-2xl my-8 transition ease-in-out duration-150 hover:text-blue-500 active:text-blue-700" />
          </li>
          <li>
            <button
              href="#"
              className="text-slate-200 font-semibold drop-shadow-lg bg-gradient-to-br from-blue-600 to-slate-800 
            transition ease-in-out duration-150 hover:from-blue-500  hover:to-blue-500 active:from-blue-700 active:to-blue-700
            rounded-br-2xl rounded-tl-2xl rounded-bl-sm rounded-tr-sm text-xl px-4 py-2 my-4"
            >
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
