"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiGithub, SiFigma } from "react-icons/si";

export default function Home() {
  return (
    <>
      {/* ================= HOME / HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="md:w-2/3">
            <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">
              Software Engineering Undergraduate
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Lochana <span className="text-blue-600">Ehelapitiya</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
              I build modern, responsive, and user-focused websites using
              cutting-edge technologies like Next.js, React, and Tailwind CSS.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                View Projects
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-600">
              <Image
                src="/profile.jpg"
                alt="Lochana Ehelapitiya"
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className=" min-h-screen py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I’m a Software Engineering undergraduate in NSBM Green University with a strong passion for frontend
              development and UI/UX design. I enjoy creating clean, intuitive, and
              performant web experiences that solve real-world problems.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              My primary focus is modern JavaScript frameworks such as React and
              Next.js. I continuously improve my skills by building projects,
              exploring best practices, and learning new tools in the web ecosystem.
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
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
      Skills & Technologies
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
      {[
        { name: "JavaScript", icon: <SiJavascript size={20} /> },
        { name: "TypeScript", icon: <SiTypescript size={20} /> },
        { name: "React", icon: <SiReact size={20} /> },
        { name: "Next.js", icon: <SiNextdotjs size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
        { name: "HTML & CSS", icon: <SiHtml5 size={20} /> },
        { name: "Git & GitHub", icon: <SiGithub size={20} /> },
        { name: "Figma", icon: <SiFigma size={20} /> },
      ].map((skill) => (
        <span
          key={skill.name}
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 text-gray-700 dark:text-gray-300"
        >
          {skill.icon} {skill.name}
        </span>
      ))}
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
      <ProjectCard
        title="Another Project"
        description="Sample project description."
        tech={["React", "API"]}
        github="https://github.com/YOUR_USERNAME/another-project"
        image="/images/projects/another.jpg"
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
