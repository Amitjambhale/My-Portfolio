// src/pages/Skills.jsx
import React from "react";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: <FaCode className="text-3xl text-pink-400" />,
      items: ["React.js", "React Native", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      gradient: "from-pink-500/20 to-purple-600/20 border-pink-400/40",
    },
    {
      title: "Backend",
      icon: <FaServer className="text-3xl text-green-400" />,
      items: ["Java", "Node.js", "Express"],
      gradient: "from-green-500/20 to-teal-600/20 border-green-400/40",
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-3xl text-blue-400" />,
      items: ["MySQL", "MongoDB"],
      gradient: "from-blue-500/20 to-indigo-600/20 border-blue-400/40",
    },
    {
      title: "Tools",
      icon: <FaTools className="text-3xl text-yellow-400" />,
      items: ["GitHub", "VS Code"],
      gradient: "from-yellow-500/20 to-orange-600/20 border-yellow-400/40",
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-slate-950 text-slate-200 py-20 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </span>
      </h1>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {skills.map((category) => (
          <div
            key={category.title}
            className={`rounded-2xl border ${category.gradient} p-6 shadow-lg bg-gradient-to-br hover:scale-105 hover:shadow-xl transition-transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h2 className="text-xl font-semibold">{category.title}</h2>
            </div>

            <ul className="space-y-3">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="bg-white/5 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
