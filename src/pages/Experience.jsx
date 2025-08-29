// src/pages/Experience.jsx
import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experience = [
    {
      period: "Jan 2025 - August 2025",
      role: "Frontend Developer Intern",
      company: "Chordz Technologies",
      details: (
        <>
          <p>
            <strong>Website Development:</strong> Developed a <em>Car Rental Website</em> for a client, focusing on responsive design, user-friendly booking interface, and seamless navigation.
          </p>
          <p className="mt-2">
            <strong>App Development:</strong> Designed and developed the <em>Books Sell and Buy</em> app, enabling users to buy and sell books seamlessly. Also contributed to the <em>MilkyWay</em> app by designing multiple pages with a focus on user experience and responsive design.
          </p>
        </>
      ),
    },
    {
      period: "Jan 2024 - April 2024",
      role: "Web Developer Intern",
      company: "Bitmap Technology",
      details:
        "Created responsive websites and landing pages for small businesses using HTML, CSS, JavaScript, React.js. Assisted in the design, development, and maintenance of websites and web applications. Collaborated with the design team to implement responsive and user-friendly web interfaces.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-5 text-gray-100 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold text-violet-500 mb-16 text-center flex items-center justify-center gap-3">
        <FaBriefcase className="text-yellow-400 text-4xl" /> Experience
      </h1>

      <div className="space-y-12">
        {experience.map(({ period, role, company, details }, idx) => (
          <article
            key={idx}
            className="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <time className="text-yellow-400 font-semibold text-lg">{period}</time>
              <p className="italic text-violet-300 mt-2 md:mt-0">{company}</p>
            </header>
            <h2 className="text-2xl font-bold text-white mb-4">{role}</h2>
            <div className="text-gray-300 leading-relaxed">{details}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
