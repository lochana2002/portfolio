"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs,SiNodedotjs,SiPostman,SiCss3,SiGithub,SiTailwindcss,SiHtml5, SiMongodb,SiFigma,} from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
     {/* ================= HOME / HERO ================= */}
<section
  id="home"
  className="min-h-screen flex items-center bg-white dark:bg-gray-900"
>
  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">

    {/* ================= LEFT : TEXT ================= */}
    <div className="md:w-2/3 text-center md:text-left">
      <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">
        Hello, It's me
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
        Lochana <span className="text-blue-600">Ehelapitiya</span>
      </h1>

      <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">
        Undergraduate Software Engineer
      </p>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
        I build modern, responsive, and user-focused web experiences using
        Next.js, React, and Tailwind CSS.
      </p>

      {/* ================= RESUME BUTTON ================= */}
<a
  href="/Lochana_Ehelapitiya_Resume.pdf"
  target="_blank"
  className="
    inline-flex items-center gap-2
    mt-6
    px-6 py-3
    rounded-lg
    text-sm font-medium
    text-white
    bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
    shadow-lg
    hover:shadow-xl
    hover:scale-105
    transition-all duration-300
  "
>
  📄 Download Resume
</a>

     {/* ================= SOCIAL LINKS ================= */}
<div className="mt-8 flex justify-center md:justify-start gap-6">
  {[
    {
      href: "https://github.com/lochana2002",
      icon: <FaGithub size={22} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/YOUR_LINKEDIN",
      icon: <FaLinkedin size={22} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:your@email.com",
      icon: <FaEnvelope size={22} />,
      label: "Email",
    },
  ].map((item) => (
    <a
      key={item.label}
      href={item.href}
      target="_blank"
      aria-label={item.label}
      className="
        group relative
        w-11 h-11
        flex items-center justify-center
        rounded-full
        bg-gray-100 dark:bg-gray-800
        text-gray-600 dark:text-gray-400
        transition-all duration-300
        hover:scale-110
      "
    >
      {/* Gradient Glow */}
      <span
        className="
          absolute inset-0
          rounded-full
          bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500
          opacity-0
          blur-lg
          transition-opacity duration-300
          group-hover:opacity-70
        "
      />

      {/* Icon */}
      <span className="relative z-10 group-hover:text-white">
        {item.icon}
      </span>
    </a>
  ))}
</div>

    </div>

    {/* ================= RIGHT : IMAGE ================= */}
    <div className="md:w-1/3 flex justify-center">
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-xl">
        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
          <img
            src="/profile.jpg"   // put image inside /public folder
            alt="Lochana Ehelapitiya"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

  </div>
</section>
{/* ================= ABOUT ================= */}
<section
  id="about"
  className="min-h-screen py-24 bg-gray-50 dark:bg-gray-800"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

    {/* ================= PROFILE IMAGE (LEFT) ================= */}
    <div className="flex justify-center md:justify-start">
      <div
        className="
          w-72 h-72 md:w-80 md:h-80
          rounded-full
          bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500
          p-1
          shadow-xl
        "
      >
        <div
          className="
            w-full h-full
            rounded-full
            overflow-hidden
            bg-white dark:bg-gray-800
          "
        >
          <img
            src="/profile.jpg"
            alt="Profile photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* ================= TEXT CONTENT (RIGHT) ================= */}
    <div className="text-justify">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white text-left">
        About Me
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        I’m a Software Engineering undergraduate at NSBM Green University with a
        strong passion for frontend development and UI/UX design. I enjoy creating
        clean, intuitive, and performant web experiences that solve real-world
        problems.
      </p>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        My primary focus is modern JavaScript frameworks such as React and Next.js.
        I continuously improve my skills by building projects, exploring best
        practices, and learning new tools in the web ecosystem.
      </p>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        I am currently seeking opportunities to grow through internships,
        collaborative projects, and hands-on development work.
      </p>
    </div>

  </div>
</section>

{/* ================= SKILLS ================= */}
  <section id="skills" className="min-h-screen py-24 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-gray-900 dark:text-white">
      Skills & Technologies
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* ================= FRONTEND ================= */}
      <div
        className="
          group rounded-2xl p-6
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-sm hover:shadow-xl
          transition-all duration-300
        "
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Frontend
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            { name: "JavaScript", icon: <SiJavascript size={18} /> },
            { name: "TypeScript", icon: <SiTypescript size={18} /> },
            { name: "React", icon: <SiReact size={18} /> },
            { name: "Next.js", icon: <SiNextdotjs size={18} /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
            { name: "HTML & CSS", icon: <SiHtml5 size={18} /> },
          ].map((skill) => (
            <span
              key={skill.name}
              className="
                flex items-center gap-2
                px-4 py-2 text-sm font-medium
                rounded-full
                bg-blue-50 text-blue-700
                dark:bg-blue-900/30 dark:text-blue-300
                transition
                group-hover:scale-[1.02]
              "
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* ================= BACKEND ================= */}
      <div
        className="
          group rounded-2xl p-6
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-sm hover:shadow-xl
          transition-all duration-300
        "
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Backend
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            { name: "Node.js", icon: <SiNodedotjs size={18} /> },
            { name: "REST APIs", icon: <SiPostman size={18} /> },
            { name: "MongoDB", icon: <SiMongodb size={18} /> },
          ].map((skill) => (
            <span
              key={skill.name}
              className="
                flex items-center gap-2
                px-4 py-2 text-sm font-medium
                rounded-full
                bg-blue-50 text-blue-700
                dark:bg-blue-900/30 dark:text-blue-300
                transition
                group-hover:scale-[1.02]
              "
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* ================= TOOLS & DESIGN ================= */}
      <div
        className="
          group rounded-2xl p-6
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-sm hover:shadow-xl
          transition-all duration-300
        "
      >
        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
          Tools & Design
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            { name: "Git & GitHub", icon: <SiGithub size={18} /> },
            { name: "Figma", icon: <SiFigma size={18} /> },
          ].map((skill) => (
            <span
              key={skill.name}
              className="
                flex items-center gap-2
                px-4 py-2 text-sm font-medium
                rounded-full
                bg-blue-50 text-blue-700
                dark:bg-blue-900/30 dark:text-blue-300
                transition
                group-hover:scale-[1.02]
              "
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= PROJECTS ================= */}
     <section id="projects" className="min-h-screen py-24 bg-white dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
      Projects
    </h2>

    <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
      A selection of academic and personal projects that demonstrate my skills
      in web development, UI design, and problem solving.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Safari Booking System"
        description="Modern booking system with responsive UI."
        tech={["Next.js", "Tailwind"]}
        github="https://github.com/lochana2002/safari-booking"
        image="/safari.png"
      />
      <ProjectCard
        title="tickets.lk Homepage Redesign"
        description="UI/UX redesign focused on usability and improved user flow."
        tech={["UI/UX", "Figma"]}
        github="https://github.com/YOUR_USERNAME/tickets-redesign"
        image="/images/projects/tickets.jpg"
      />
      <ProjectCard
        title="Personal Portfolio"
        description="My personal developer portfolio built with modern technologies."
        tech={["Next.js", "TypeScript", "Tailwind CSS"]}
        github="https://github.com/YOUR_USERNAME/portfolio"
        image="/images/projects/portfolio.jpg"
      />
    </div>
  </div>
</section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="min-h-screen py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-10">
            I’m always open to discussing new projects, internship opportunities,
            or collaborations. Feel free to reach out — I’d love to connect.
          </p>

          <p className="text-blue-600 font-medium mb-4">
            your.email@example.com
          </p>

          <div className="flex justify-center gap-8 text-sm">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
