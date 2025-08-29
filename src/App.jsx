// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-6 text-center text-white">Loading…</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
