import { ExternalLink } from 'lucide-react';

const MY_PROJECTS = [
  {
    title: "IoT Smart Doorbell",
    description: "An interactive full-stack web application built to monitor and control a smart doorbell system remotely, bridging software control with hardware IoT devices.",
    tags: ["React", "Node.js", "IoT", "APIs"],
    github: "https://github.com/ahsmr/DoorIQWeb", 
    live: "https://door-iq-web.vercel.app/"    
  },
  {
    title: "Discord Currency & Utility Bot",
    description: "An automated backend bot featuring a custom virtual currency economy, automated server moderation, and dynamic role-assignment systems.",
    tags: ["Java", "JDA", "Databases"," sqlite"],
    github: "https://github.com/ahsmr/Prince-Xares",
    live: null   // Bots don't usually have a live website URL, so we set this to null
  },
  {
    title: "VPN Shop Landing Page",
    description: "My foundational software project: a responsive, visually structured landing page built entirely from scratch with raw HTML and CSS layout mechanics.",
    tags: ["HTML", "CSS", "Responsive Design"," Bootstrap"],
    github: "https://github.com/ahsmr/VpnShop",
    live: "https://ahsmr.github.io/VpnShop/"
  }
];
export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 min-h-[80vh]">
      <div className="border-l-4 border-[#E07A5F] pl-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[#2C2520]">Engineering & Logic</h1>
        <p className="text-gray-500 mt-2">A chronicle of computational setups and system logic blueprints.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {MY_PROJECTS.map((project, index) => (
          <div key={index} className="bg-[#FFFDF9] border border-[#E07A5F]/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-[#B55136] mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="bg-[#F4F1DE] text-[#2C2520] text-xs px-2.5 py-1 rounded font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 border-t border-[#E07A5F]/10 pt-4">
              
              {/* FIXED: Replaced <Github /> component with custom inline SVG */}
              <a href={project.github} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#E07A5F]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                Repository
              </a>

              {project.live && (
                <a href={project.live} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#E07A5F]">
                  <ExternalLink size={14} /> Live Build
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}