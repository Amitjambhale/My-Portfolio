// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Amit Jambhale
      </footer>
    </div>
  );
}
