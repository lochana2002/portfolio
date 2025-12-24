export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-500 flex justify-center">
        <p className="text-center">
          © {new Date().getFullYear()} Lochana Ehelapitiya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
