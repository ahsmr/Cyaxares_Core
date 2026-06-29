import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-b border-[#E07A5F]/20 bg-[#FFFDF9]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Updated Brand Link with Favicon */}
        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-widest text-[#B55136] hover:opacity-80 transition-opacity group">
          <img 
            src="/favicon.png" 
            alt="Logo" 
            className="w-6 h-6 object-contain rounded-sm group-hover:rotate-12 transition-transform duration-300"
          />
          <span>CYAXARES_CORE</span>
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