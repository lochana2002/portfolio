import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string; // new prop for project image
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
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition bg-white dark:bg-gray-800">
      {/* Project Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm font-medium">
          <Link
            href={github}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub →
          </Link>

          {live && (
            <Link
              href={live}
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
