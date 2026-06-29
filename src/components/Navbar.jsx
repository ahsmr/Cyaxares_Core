import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b border-[#E07A5F]/20 bg-[#FFFDF9]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-widest text-[#B55136] hover:opacity-80 transition-opacity">
          CYAXARES_CORE
        </Link>
        <div className="flex gap-8 text-sm font-medium tracking-wide">
          <Link to="/" className="hover:text-[#E07A5F] transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-[#E07A5F] transition-colors">Projects</Link>
          <Link to="/calligraphy" className="hover:text-[#E07A5F] transition-colors">Calligraphy</Link>
        </div>
      </div>
    </nav>
  );
}