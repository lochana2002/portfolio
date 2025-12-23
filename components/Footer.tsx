export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Lochana Ehelapitiya. All rights reserved.</p>
      </div>
    </footer>
  );
}
