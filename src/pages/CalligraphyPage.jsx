import { useState } from 'react';

// Helper function to dynamically resolve paths within src/assets
const getAssetUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

const GALLERY_ITEMS = [
  { 
    title: "Poem By William Shakespeare", 
    script: "Copperplate / May 23 2026", 
    category: "oblique", 
    imgSrc: getAssetUrl("23_05_2026.png") 
  },
  { 
    title: "Poem By William Shakespeare", 
    script: "Copperplate / May 21 2026", 
    category: "oblique", 
    imgSrc: getAssetUrl("21_05_2026.png") 
  },
  { 
    title: "Poem By William Blake", 
    script: "Copperplate / June 27 2026", 
    category: "oblique", 
    imgSrc: getAssetUrl("27_06_2026.png") 
  },
  { 
    title: "Poem By Pablo Neruda", 
    script: "Copperplate / May 19 2026", 
    category: "oblique", 
    imgSrc: getAssetUrl("19_05_2026.png") 
  },
  { 
    title: "My first Copperplate Calligraphy with Oblique pen and Ink", 
    script: "Copperplate / May 18 2026", 
    category: "oblique", 
    imgSrc: getAssetUrl("18_05_2026.png") 
  },
  { 
    title: "Script with Brush Pen", 
    script: "Brush Pen / April 19 2026", 
    category: "brush",
    imgSrc: getAssetUrl("brush1.png") 
  },
  { 
    title: "My first calligraphy with brush pen", 
    script: "Brush Pen / April 10 2026", 
    category: "brush",
    imgSrc: getAssetUrl("brush2.png") 
  },
  { 
    title: "My first Calligraphy with pen and nib", 
    script: "Brush Pen / May 1 2026", 
    category: "straight",
    imgSrc: getAssetUrl("First.png") 
  },
  { 
    title: "Poem by Rumi", 
    script: "Brush Pen / May 2 2026", 
    category: "straight",
    imgSrc: getAssetUrl("Rumi.png") 
  },
  { 
    title: "Poem by Hafez", 
    script: "Brush Pen / May 3 2026", 
    category: "straight",
    imgSrc: getAssetUrl("Hafez.png") 
  },
  {
    title: "Signature",
    script: "Traditional Broad Nib / Blackletter",
    category: "oblique", 
    imgSrc: getAssetUrl("Signature.png") 
  }
];

export default function CalligraphyPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeFilter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 min-h-[80vh]">
      
      {/* Header */}
      <div className="border-l-4 border-[#E07A5F] pl-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[#2C2520]">Ink & Flourish</h1>
        <p className="text-gray-500 mt-2">Exhibits of focused stroke work exploring pressure and thin structural lines.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10 border-b border-[#E07A5F]/10 pb-4">
        {['all', 'oblique', 'brush', 'straight'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all uppercase tracking-wider ${
              activeFilter === cat 
                ? 'bg-[#E07A5F] text-[#FFFDF9] shadow-sm' 
                : 'bg-[#F4F1DE] text-[#2C2520] hover:bg-[#E07A5F]/10'
            }`}
          >
            {cat === 'all' ? 'All Scripts' : cat === 'oblique' ? 'Oblique Pen' : cat === 'brush' ? 'Brush Pen' : 'Straight Pen'}
          </button>
        ))}
      </div>

      {/* Pinterest-Style Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 [column-fill:_balance]">
        {filteredItems.map((item, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(item.imgSrc)} // Passes the resolved URL string
            className="break-inside-avoid bg-[#FFFDF9] border border-[#E07A5F]/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 group flex flex-col"
          >
            <div className="bg-[#F4F1DE] w-full overflow-hidden">
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-[#FFFDF9] border-t border-[#E07A5F]/5">
              <h3 className="font-bold text-sm text-[#2C2520] leading-tight">{item.title}</h3>
              <p className="text-[11px] font-mono text-[#B55136] mt-0.5">{item.script}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-400 font-mono text-sm py-12">No scripts found in this category yet.</p>
      )}

      {/* SMOOTH FULL-SCREEN OVERLAY LIGHTBOX */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button className="absolute top-6 right-6 text-white/70 hover:text-white text-sm font-mono tracking-widest uppercase">
            [ Close ]
          </button>
          
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl select-none"
          />
        </div>
      )}

    </div>
  );
}