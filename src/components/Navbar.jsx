import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1a1a1a] via-[#222] to-[#1a1a1a] shadow-lg border-b border-yellow-500/40">

      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-violet-400">
          Amit Jambhale
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-slate-300 font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col gap-4 bg-slate-900 px-6 py-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
