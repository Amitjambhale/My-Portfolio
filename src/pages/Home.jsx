// src/pages/Home.jsx
import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";


const About = lazy(() => import("./About"));
const Skills = lazy(() => import("./Skills"));
const Experience = lazy(() => import("./Experience"));
const Contact = lazy(() => import("./Contact"));
const Projects = lazy(() => import("./Projects"));
const Education = lazy(() => import("./Education"));

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 min-h-[70vh] px-8">
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Greeting */}
          <h2 className="text-xl text-yellow-400 font-medium">Hi, I'm</h2>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Amit <span className="text-violet-400">Jambhale</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg text-slate-300 max-w-lg mx-auto md:mx-0">
            A passionate{" "}
            <span className="text-yellow-400">Frontend Developer</span> who loves
            building modern, responsive, and user-friendly web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE / ILLUSTRATION */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/dummy.jpg"
            alt="Amit Jambhale Profile"
            className="w-60 h-60 md:w-70 md:h-70 object-cover rounded-full border-4 border-violet-500 shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* About, Skills, Experience Sections */}
      <Suspense fallback={<div className="p-6 text-center text-white">Loading…</div>}>
        <section className="max-w-7xl mx-auto px-6 py-6 space-y-20">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </section>
      </Suspense>
    </>
  );
}
