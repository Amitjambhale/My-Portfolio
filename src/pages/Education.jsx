// src/pages/Education.jsx
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

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
    <section className="bg-slate-950 text-gray-100 py-20 px-6 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Education
        </span>
      </h1>

      {/* Centered cards */}
      <div className="max-w-4xl mx-auto space-y-10">
        {educationData.map(
          ({ institution, period, degree, cgpa, percentage, details }, idx) => (
            <div
              key={idx}
              className="relative group bg-white/5 backdrop-blur-lg rounded-2xl border border-transparent 
                         hover:border-pink-400/40 transition-all p-8 shadow-lg hover:shadow-pink-500/20"
            >
              {/* Icon top left */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center shadow-md">
                <FaGraduationCap className="text-white text-lg" />
              </div>

              <div className="mt-6">
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h2 className="text-xl font-bold">{institution}</h2>
                  <time className="text-sm font-medium text-yellow-400 mt-1 sm:mt-0">
                    {period}
                  </time>
                </header>

                <p className="text-violet-300 italic">{degree}</p>

                {cgpa && (
                  <p className="text-gray-300 font-semibold mt-2">
                    CGPA: <span className="text-yellow-400">{cgpa}</span>
                  </p>
                )}
                {percentage && (
                  <p className="text-gray-300 font-semibold mt-2">
                    Percentage:{" "}
                    <span className="text-yellow-400">{percentage}</span>
                  </p>
                )}

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {details}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
