// src/pages/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Car Rental Website",
    description:
      "Developed a fully responsive car rental website for a client, focusing on responsive design, user-friendly booking interface, and seamless navigation.",
    demoLink: "#",
    repoLink: "#",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Books Sell and Buy App",
    description:
      "Designed and developed a mobile app enabling users to buy and sell books seamlessly, featuring secure login/signup, interactive class listings, and user-friendly UI for booking classes.",
    demoLink: "#",
    repoLink: "#",
    tech: ["React Native", "JavaScript", "Firebase"],
  },
  {
    title: "MilkyWay App",
    description:
      "Contributed to the MilkyWay app by designing multiple pages with a focus on user experience and responsive design.",
    demoLink: "#",
    repoLink: "#",
    tech: ["React Native", "UI/UX Design"],
  },
  {
    title: "Hotel Management System",
    description:
      "Developed a dynamic hotel/restaurant management system using React.js, allowing staff to manage table bookings, menu items, customer orders, and billing with role-based access.",
    demoLink: "#",
    repoLink: "#",
    tech: ["React.js", "React Native", "JavaScript"],
  },
  {
    title: "Netflix Clone",
    description:
      "Created an immersive video streaming experience clone with user authentication, content browsing, and media playback capabilities using HTML, CSS, and JavaScript.",
    demoLink: "#",
    repoLink: "#",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Automated System For Assisting Blind People",
    description:
      "Team project developing an automated system to assist visually impaired individuals using Python, OpenCV, TensorFlow, and Raspberry Pi face detection.",
    demoLink: "#",
    repoLink: "#",
    tech: ["Python", "OpenCV", "TensorFlow", "Raspberry Pi"],
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 text-gray-100 min-h-[80vh]">
      <h1 className="text-5xl font-extrabold text-violet-500 mb-16 text-center">
        My Projects
      </h1>

      <div className="grid gap-12 md:grid-cols-3">
        {projects.map(({ title, description, demoLink, repoLink, tech }, idx) => (
          <article
            key={idx}
            className="bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
            <p className="text-gray-300 flex-grow">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((techItem) => (
                <span
                  key={techItem}
                  className="bg-violet-700 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              {demoLink !== "#" && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-yellow-400 text-gray-900 font-semibold py-2 rounded-lg shadow hover:bg-yellow-500 transition"
                >
                  Live Demo
                </a>
              )}
              {repoLink !== "#" && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-violet-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-violet-700 transition"
                >
                  Source Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
