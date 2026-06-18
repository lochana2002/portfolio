interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
  link,
}: CertificationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        <h3 className="text-lg font-semibold mb-2 text-center">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-2 text-center">
          {issuer}
        </p>

        <p className="text-sm text-gray-500 mb-4 text-center">
          Issued: {date}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400
              hover:underline underline-offset-4"
        >
          Verify →
        </a>

      </div>
    </div>
  );
}