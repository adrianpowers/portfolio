import React from "react";
import headshot from "../headshot.png";

export default function HeroSection() {
  return (
    <>
      { /* Small Hero Section */ }
      <section
        id="homepageSmall"
        className="lg:hidden bg-slate-300 dark:bg-slate-900 mb-10"
      >
        <div id="hero-section" className="text-center p-10">
          <h2 className="text-blue-900 dark:text-blue-300 drop-shadow-md text-5xl pt-2 font-bold">
            Adrian Powers
          </h2>
          <h3 className="text-blue-700 dark:text-blue-500 drop-shadow-md text-2xl font-semibold pb-3">
            Full-Stack Developer
          </h3>
          <p className="text-slate-800 dark:text-blue-300 text-lg font-semibold py-2 leading-6">
            Former animator and artist turned programmer: I've got a keen eye
            for UI/UX and design and I've got what it takes to make your
            frontend pop!
          </p>
          <p className="text-slate-800 dark:text-blue-300 text-lg font-semibold py-2 leading-6">
            Wait...need some help in the backend? Never fear: RESTful APIs and
            SQL databases are my jam, too!
          </p>
          <p className="text-slate-800 dark:text-blue-300 text-lg font-semibold py-2 leading-6 mb-6">
            Wherever you need a new coder in your pipeline, I can fill the gap
            with my passion, drive, and determination.
          </p>
          <div
            id="headshot"
            className="grayscale-[50%] transition ease-in-out hover:grayscale-0 relative max-w-xs pt-10 mx-auto"
          >
            <img
              src={headshot}
              alt="A dapperly dressed programmer in front of trees."
            />
          </div>
        </div>
      </section>
      
      { /* Large Hero Section */ }
      <section
        id="homepage"
        className="hidden lg:flex justify-center bg-slate-300 dark:bg-slate-900 mb-10"
      >
        <div id="hero-section" className="text-right p-4">
          <div className="max-w-md">
            <h2 className="text-blue-900 dark:text-blue-300 drop-shadow-md text-5xl pt-2 font-bold">
              Adrian Powers
            </h2>
            <h3 className="text-blue-700 dark:text-blue-500 drop-shadow-md text-2xl font-semibold pb-3">
              Full-Stack Developer
            </h3>
            <p className="text-slate-800 dark:text-blue-300 text-lg font-semibold py-2 leading-6">
              Former animator and artist turned programmer: I've got a keen eye
              for UI/UX and design and I've got what it takes to make your
              frontend pop!
            </p>
            <p className="text-slate-800 dark:text-blue-300 text-lg font-semibold py-2 leading-6">
              Wait...need some help in the backend? Never fear: RESTful APIs and
              SQL databases are my jam, too!
            </p>
            <p className="text-slate-800 dark:text-blue-300 text-lg font-semibold py-2 leading-6 mb-6">
              Wherever you need a new coder in your pipeline, I can fill the gap
              with my passion, drive, and determination.
            </p>
          </div>
        </div>
        <div
          id="headshot"
          className="grayscale-[50%] transition ease-in-out hover:grayscale-0 pt-8 max-w-sm"
        >
          <img
            src={headshot}
            alt="A dapperly dressed programmer in front of trees."
          />
        </div>
      </section>
    </>
  );
}
