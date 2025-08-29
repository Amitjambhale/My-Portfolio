// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="max-w-8xl mx-auto px-2 py-4 text-slate-300 min-h-[60vh]">
      <h1 className="text-4xl font-extrabold text-violet-400 mb-8 text-center">
        About <span className="text-yellow-400">Me</span>
      </h1>

      <div className="bg-slate-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Who I Am</h2>
        <p className="leading-relaxed mb-4">
          I'm <span className="text-yellow-400 font-semibold">Amit Jambhale</span>, a Frontend Developer passionate about crafting clean, efficient, and scalable web applications. With a strong foundation in React.js and React Native, I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        </p>
        <p className="leading-relaxed">
          I thrive in collaborative environments and continuously seek to learn new technologies and improve my skills. My goal is to build impactful digital experiences that users love.
        </p>

        {/* Resume Download */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
          aria-label="Download Resume"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
