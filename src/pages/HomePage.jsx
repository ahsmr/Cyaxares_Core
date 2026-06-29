import { Link } from 'react-router-dom';
import { ArrowRight, Code, PenTool } from 'lucide-react';
import signatureImg from '../assets/Signature.png'; // Signature imported back for the footer!

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#E07A5F] text-[#FFFDF9] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* Central Profile Photo Container with your Jiggle Hover effect */}
          <div className="my-8">
            <img 
              src="/favicon.png"
              alt="Cyaxares Core"
              className="w-24 h-24 md:w-45 md:h-45 object-contain rounded-full shadow-lg border-2 border-[#FFFDF9]/20 hover:animate-jiggle cursor-pointer"
            />
          </div>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light opacity-90 leading-relaxed mt-4">
            A digital oasis where the precision of logic meets the fluid elegance of the ink stroke.
          </p>
        </div>
      </section>

      {/* CONTENT CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Software Engineering Card */}
          <div className="border border-[#E07A5F]/20 rounded-2xl p-8 bg-[#FFFDF9] hover:shadow-xl hover:border-[#E07A5F]/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#F4F1DE] flex items-center justify-center text-[#B55136] mb-6">
                <Code size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2C2520]">Software Engineering</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore architectural systems, interactive full-stack applications, and performance optimizations.
              </p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#B55136] font-semibold group-hover:translate-x-1 transition-transform">
              View Digital Catalog <ArrowRight size={16} />
            </Link>
          </div>

          {/* Calligraphy Card */}
          <div className="border border-[#E07A5F]/20 rounded-2xl p-8 bg-[#FFFDF9] hover:shadow-xl hover:border-[#E07A5F]/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#F4F1DE] flex items-center justify-center text-[#B55136] mb-6">
                <PenTool size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#2C2520]">Nib & Ink /Brush Pen Calligraphy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A gallery of traditional scripts, hand-drawn flourishes, and expressive rhythm captured through fine nibs.
              </p>
            </div>
            <Link to="/calligraphy" className="inline-flex items-center gap-2 text-[#B55136] font-semibold group-hover:translate-x-1 transition-transform">
              View Manuscript Gallery <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="border-t border-[#E07A5F]/20 bg-[#F4F1DE]/40 py-12 px-6 text-center">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <h3 className="text-lg font-bold text-[#2C2520] mb-4 tracking-wider">CONNECT WITH Me</h3>
          
          <div className="flex justify-center gap-8 mb-6">
            {/* Custom Instagram SVG */}
            <a href="https://www.instagram.com/cyaxares.i/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#E07A5F] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg> 
              <span className="text-sm font-medium">Instagram</span>
            </a>
            
            {/* Custom YouTube SVG */}
            <a href="https://www.youtube.com/@TheCyaxares" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#E07A5F] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <polygon points="10 15 15 12 10 9"/>
              </svg> 
              <span className="text-sm font-medium">YouTube</span>
            </a>
            {/* GitHub */}
              <a
                href="https://github.com/ahsmr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#E07A5F] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22"/>
                </svg>

                <span className="text-sm font-medium">GitHub</span>
              </a>
              {/* Email */}
              <a
                href="mailto:amirseiber@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-[#E07A5F] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 6 12 13 2 6"/>
                </svg>

                <span className="text-sm font-medium">Email</span>
              </a>

          </div>

          {/* Reinstated Signature & Accent Layout Area */}
          <div className="mb-4 opacity-40 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center gap-2">
            <img 
              src={signatureImg} 
              alt="cyaxares signature" 
              className="h-14 mix-blend-multiply select-none" 
            />
            <img 
              src="/favicon.png" 
              alt="" 
              className="w-4 h-4 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" 
            />
          </div>

          <p className="text-xs text-gray-400 font-mono">© 2026 ahsmr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}