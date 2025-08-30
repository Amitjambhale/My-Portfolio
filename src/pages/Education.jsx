// src/pages/Education.jsx
import React from "react";

const educationData = [
  {
    institution: "Kj's Trinity Academy Of Engineering",
    period: "Sep 2020 - Jun 2024",
    degree: "Bachelor of Computer Engineering",
    cgpa: "8.1",
    details: "Focused on software development, data structures, and algorithms.",
  },
  {
    institution: "K.B.P. Bhuinj",
    period: "Aug 2018 - May 2020",
    degree: "Higher Secondary Certificate (HSC)",
    percentage: "63.85%",
    details: "Completed science stream with focus on mathematics and computer science.",
  },
  {
    institution: "New English School Humgaon",
    period: "May 2018",
    degree: "Secondary School Certificate (SSC)",
    percentage: "84.15%",
    details: "Completed secondary education with strong academic performance.",
  },
];

export default function Education() {
  return (
    <section className="max-w-4xl mx-auto px-8 py-16 text-gray-100 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold text-violet-500 mb-16 text-center">
        Education
      </h1>

      <div className="space-y-12">
        {educationData.map(
          ({ institution, period, degree, cgpa, percentage, details }, idx) => (
            <article
              key={idx}
              className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h2 className="text-2xl font-bold text-white">{institution}</h2>
                <time className="text-yellow-400 font-semibold mt-2 md:mt-0">{period}</time>
              </header>
              <p className="text-violet-300 italic mb-2">{degree}</p>
              {cgpa && (
                <p className="text-gray-300 font-semibold mb-1">
                  CGPA: <span className="text-yellow-400">{cgpa}</span>
                </p>
              )}
              {percentage && (
                <p className="text-gray-300 font-semibold mb-1">
                  Percentage: <span className="text-yellow-400">{percentage}</span>
                </p>
              )}
              <p className="text-gray-400 leading-relaxed">{details}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
}
