"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import CertificationCard from "@/components/CertificationCard";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  
  SiPostman, SiSwagger, 
  SiGithub,
  SiTailwindcss,
  SiHtml5,
  SiCss3,SiMysql, SiCanva,
  SiPostgresql,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import TypeSequence from "@/components/TypingSequence";
import DotsBackground from "@/components/DotsBackground";


export default function Home() {

  const certifications = [
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "June 2025",
    image: "web1.jpg",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
  {
    title: " Frontend Development",
    issuer: "University of Moratuwa",
    date: "Mar 2026",
    image: "web2.jpg",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
  {
    title: " Python for Beginners",
    issuer: "University of Moratuwa",
    date: "Feb 2026",
    image: "python.jpg",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
 
];

  return (
    <>
     <DotsBackground />
     {/* ================= HOME / HERO ================= */}
     <ScrollReveal>
<section id="home" className="min-h-screen flex items-center"
>
  <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

    {/* ================= LEFT : TEXT ================= */}
    <div className="md:w-2/3 text-center md:text-left">
      <p className="text-sm uppercase tracking-widest bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent mb-4">
        Hello, It's me
      </p>

    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
  Lochana{" "}
  <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800 bg-clip-text text-transparent">
    Ehelapitiya
  </span>
</h1>

   <TypeSequence />

<div className="text-justify">
<p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
  I design and develop refined, user-focused web interfaces where aesthetics meet
  functionality with a strong interest in full-stack web development, creating intuitive, scalable, and user-centered web
applications through modern development practices and effective UI/UX design. 
</p></div>

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
    bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800
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
      href: "https://linkedin.com/in/lochana-thathsarani-ehelapitiya-1898a9350",
      icon: <FaLinkedin size={22} />,
      label: "LinkedIn",
    },
    {
      href: "https://ehltehelapitiya@gmail.com",
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
          bg-gradient-to-tr from-blue-500 via-blue-600 to-purple-800
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

   <div className="md:w-1/3 flex justify-center">
  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">

    {/* Outer Ring */}
    <div className="absolute inset-0 rounded-full animate-spin-slow">
      <div className="w-full h-full rounded-full border-[3px] border-transparent border-t-blue-600 border-r-purple-800 shadow-[0_0_25px_rgba(56,189,248,0.5)]" />
    </div>

    {/* Inner Ring */}
    <div className="absolute inset-3 rounded-full animate-spin-reverse">
      <div className="w-full h-full rounded-full border-[2px] border-transparent border-b-blue-500 border-l-purple-700 shadow-[0_0_20px_rgba(14,165,233,0.4)]" />
    </div>

    {/* Profile Image */}
    <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
      <img
        src="/profile.jpg"
        alt="Lochana Ehelapitiya"
        className="w-full h-full object-cover"
      />
    </div>
</div>
  </div>
</div>
</section></ScrollReveal>

{/* ================= ABOUT ================= */}
<ScrollReveal>
<section
  id="about"
  className="min-h-screen py-24 bg-gray-50 dark:bg-gray-800"
>
  <h2 className="text-5xl font-bold text-center mb-20">
    About<span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800 bg-clip-text text-transparent"> Me</span>
  </h2>
  <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* ================= PROFILE IMAGE (LEFT) ================= */}
    <div className="flex justify-center md:justify-start">
      <div
        className="
          w-72 h-72 md:w-80 md:h-80
          rounded-full
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
      
<p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
  I am Lochana Thathsarani Ehelapitiya, Software Engineering undergraduate at NSBM Green University with a strong interest in full-stack web development, creating intuitive, scalable, and user-centered web
applications through modern development practices and effective UI/UX design.  I enjoy crafting visually
  appealing, and high-performing web interfaces that deliver meaningful
  user experiences.
</p>

<p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
  My work primarily focuses on modern JavaScript technologies such as React and
  Next.js. I continuously refine my skills by building real-world projects,
  following industry best practices, and exploring emerging tools within the web
  development ecosystem.
</p>

<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
  I am currently seeking internship opportunities and collaborative projects where
  I can contribute, learn, and grow as a full-stack web development focused software engineer while
  delivering impactful digital solutions.
</p>
    </div>

  </div>
</section></ScrollReveal>

{/* ================= EDUCATION ================= */}
<ScrollReveal>
<section
  id="education"
  className="min-h-screen py-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
>

 <div className="max-w-4xl mx-auto px-6">

  {/* TITLE */}
  <h2 className="text-5xl font-bold text-center mb-20">
    My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Journey</span>
  </h2>
<p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-center">A glimpse into my academic background, and growth in software engineering.</p>
  <div className="relative">

    {/* Desktop center line */}
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-t from-blue-500 to-purple-600 rounded-full" />

    {/* Mobile left line */}
    <div className="md:hidden absolute left-5 top-0 h-full w-[2px] bg-gradient-to-t from-blue-500 to-purple-600 rounded-full" />

    <div className="space-y-16">

      {/* ── Item 1 : Education (LEFT on desktop) ── */}
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 pl-14 md:pl-0">

        {/* Mobile dot */}
        <div className="md:hidden absolute left-1 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 text-xs shadow-lg">
          {"🎓"}
        </div>

        {/* Card — left */}
        <div className="w-full md:w-[45%]">
          <div className="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 mb-3">
              Since 2023
            </span>
            <h4 className="text-lg font-semibold mb-1">Undergraduate – Software Engineering</h4>
            <p className="text-sm text-blue-400 mb-3 font-medium">NSBM Green University</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-justify">
              Focusing on full-stack web development, creating intuitive, scalable, and user-centered web applications
through modern development practices and effective UI/UX design. 
            </p>
          </div>
        </div>

        {/* Desktop center dot */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 items-center justify-center z-10 shadow-lg shadow-blue-500/30">
          {"🎓"}
        </div>

        {/* Right spacer */}
        <div className="hidden md:block w-[45%]" />
      </div>

      {/* ── Item 2 : Experience (RIGHT on desktop) ── */}
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 pl-14 md:pl-0">

        {/* Mobile dot */}
        <div className="md:hidden absolute left-1 w-8 h-8 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900 flex items-center justify-center z-10 text-xs shadow-lg">
          {"📝"}
        </div>

        {/* Left spacer */}
        <div className="hidden md:block w-[45%]" />

        {/* Desktop center dot */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 border-4 border-white dark:border-gray-900 items-center justify-center z-10 shadow-lg shadow-purple-500/30">
          {"📝"}
        </div>

        {/* Card — right */}
        <div className="w-full md:w-[45%]">
          <div className="rounded-2xl p-6 bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 mb-3">
              2019 – 2022
            </span>
            <h4 className="text-lg font-semibold mb-1">Mo/ K.N.S.</h4>
            <p className="text-sm text-purple-400 mb-3 font-medium">G.C.E.(A/L) Examination</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Physical Science Stream
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

</section></ScrollReveal>

{/* ================= SKILLS ================= */}
<ScrollReveal>
  <section id="skills" className="min-h-screen py-24 bg-white dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-6">
  <h2 className="text-5xl font-bold text-center mb-20">
    Skills & <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800 bg-clip-text text-transparent">Technologies</span>
  </h2>
<p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-center">
    Technologies and tools I use to design, develop, and deploy applications.
</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
              { name: "HTML", icon: <SiHtml5 size={18} /> },
  { name: "CSS", icon: <SiCss3 size={18} /> },
  { name: "JavaScript", icon: <SiJavascript size={18} /> },
  { name: "TypeScript", icon: <SiTypescript size={18} /> },
  { name: "React", icon: <SiReact size={18} /> },
  { name: "Next.js", icon: <SiNextdotjs size={18} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
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
  { name: "NestJS", icon: <SiNestjs size={18} /> },

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
      
      {/* ================= DATABASE ================= */}
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
          Database
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
  { name: "MySQL", icon: <SiMysql size={18} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={18} /> }, 
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
  { name: "Postman", icon: <SiPostman size={18} /> },  { name: "Swagger", icon: <SiSwagger size={18} /> },
  { name: "Figma", icon: <SiFigma size={18} /> }, 
    { name: "Canva", icon: <SiCanva size={18} /> },
  { name: "Photoshop", icon: <SiAdobephotoshop size={18} /> },
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
</section></ScrollReveal>

      {/* ================= PROJECTS ================= */}
      <ScrollReveal>
     <section id="projects" className="min-h-screen py-24 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
      Projects
    </h2>
    
      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
  A collection of individual and team projects showcasing my development skills, UI/UX, collaboration, and problem-solving ability.
</p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Safari Booking System"
        description="Modern booking system with responsive UI."
        tech={["Next.js", "Tailwind", "TypeScript", "NestJS", "PostgreSQL", "UI/UX"]}
        github="https://github.com/lochana2002/safari-booking"
        image="/safari.png"
      />
      <ProjectCard
        title="'GoviAI' Mobile Application"
        description="Developed an AI-powered agriculture mobile application for Sri Lankan farmers using Flutter and  Firebase."
        tech={["Flutter", "Firebase", "Gemini API", "Groq LLaMA"]}
        github="https://github.com/Nisansala23/govi-ai"
        image="/goviai.png"
      />
      <ProjectCard
        title="Auction Site Management System"
        description="Developed the complete Blog module as a full-stack contributor using ASP.NET Core, Entity Framework Core, and
Next.js."
        tech={["Next.js", "Tailwind", "TypeScript", "ASP.NET", "C#", ]}
        github="https://github.com/laspraharshana/test-front"
        image="/auction.png"
      />

    </div>
  </div>
</section>
</ScrollReveal>

{/* ================= CERTIFICATIONS ================= */}
<ScrollReveal>
  <section
    id="certifications"
    className="min-h-screen py-24 bg-white dark:bg-gray-800"
  >
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-5xl font-bold text-center mb-20">
        Certifications
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-center">
  Certifications that showcase my technical skills and continuous learning.
</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            image={cert.image}
            link={cert.link}
          />
        ))}
      </div>

    </div>
  </section>
</ScrollReveal>

    {/* ================= CONTACT ================= */}
<ScrollReveal>
  <section id="contact" className="min-h-screen py-24 bg-gray-50 dark:bg-gray-900">
    <h2 className="text-5xl font-bold text-center mb-20">
      Get In<span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800 bg-clip-text text-transparent"> Touch</span>
    </h2>
    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8 text-center">
  Open to internships, freelance projects, and collaborations. Feel free to reach out anytime.
</p>
{/* Heading */}
<h3 className="text-2xl md:text-3xl py-15 font-semibold text-gray-900 dark:text-white mb-4 text-center">
  Let’s build something great together
</h3>

{/* Contact pills */}
<ScrollReveal>
<div className="flex flex-wrap justify-center gap-3">
  {[
    {
      href: "https://ehltehelapitiya@gmail.com",
      icon: <FaEnvelope size={14} />,
      label: "Email",
    },
    {
      href: "https://linkedin.com/in/lochana-thathsarani-ehelapitiya-1898a9350",
      icon: <FaLinkedin size={14} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/lochana2002",
      icon: <FaGithub size={14} />,
      label: "GitHub",
    },
  ].map((item) => (
    <a
      key={item.label}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-full
        border border-gray-200 dark:border-gray-700
        text-sm font-medium
        text-gray-600 dark:text-gray-300
        hover:bg-gray-900 hover:text-white
        dark:hover:bg-white dark:hover:text-gray-900
        transition-all duration-200
        hover:scale-[1.03]
      "
    >
      {item.icon}
      {item.label}
    </a>
  ))}
</div></ScrollReveal>
  </section>
</ScrollReveal>
    </>
  );
}