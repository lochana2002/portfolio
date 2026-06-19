import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
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
      href: "mailto:ehltehelapitiya@gmail.com",
      icon: <FaEnvelope size={22} />,
      label: "Email",
    },
  ];

  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
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
                hover:text-white
              "
            >
              {/* Gradient Glow */}
              <span
                className="
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-tr
                  from-blue-500
                  via-blue-600
                  to-purple-800
                  opacity-0
                  blur-lg
                  transition-opacity duration-300
                  group-hover:opacity-70
                "
              />

              {/* Background Fill */}
              <span
                className="
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-tr
                  from-blue-500
                  via-blue-600
                  to-purple-800
                  scale-0
                  transition-transform duration-300
                  group-hover:scale-100
                "
              />

              <span className="relative z-10">
                {item.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Lochana Ehelapitiya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}