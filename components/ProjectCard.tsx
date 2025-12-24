import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}: ProjectCardProps) {
  return (
    <div
      className="
        group relative rounded-2xl overflow-hidden
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
        shadow-sm hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* Image overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/70 via-black/20 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </div>

      {/* Content */}
      <div className="p-6 text-left">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item) => (
            <span
              key={item}
              className="
                text-xs font-medium
                px-3 py-1 rounded-full
                bg-blue-50 text-blue-700
                dark:bg-blue-900/30 dark:text-blue-300
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link
            href={github}
            target="_blank"
            className="
              text-blue-600 dark:text-blue-400
              hover:underline underline-offset-4
            "
          >
            GitHub →
          </Link>

          {live && (
            <Link
              href={live}
              target="_blank"
              className="
                text-gray-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                transition
              "
            >
              Live Demo →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
