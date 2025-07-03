export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <span className="text-2xl font-semibold tracking-tight">AI Page Builder</span>
          </div>
          <div className="text-gray-400 text-sm font-light">
            © 2024 AI Page Builder. Professional AI-generated landing pages.
          </div>
        </div>
      </div>
    </footer>
  );
}