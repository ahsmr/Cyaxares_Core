import { useState, useEffect } from 'react';

// 1. Import your local signature assets here. 
// Adjust the paths relative to your components folder as needed.
import signatureImg1 from '../assets/signature.png'; 

// 2. Define your local signature data structurally matching your Cloudinary output
const LOCAL_SIGNATURES = [
  {
    title: "Official Brand Signature",
    script: "Custom Signature Line",
    category: "signature",
    imgSrc: signatureImg1, // Used for the gallery grid view
    rawSrc: signatureImg1  // Used for the fullscreen lightbox view
  }
];

export default function CalligraphyPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const CLOUD_NAME = 'lh6cbel6'; 
  const CLOUDINARY_LIST_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/portfolio_gallery.json`;

  useEffect(() => {
    fetch(CLOUDINARY_LIST_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // If Cloudinary fails or is empty, still keep the local signatures visible
        if (!data.resources || data.resources.length === 0) {
          setGalleryItems(LOCAL_SIGNATURES);
          setLoading(false);
          return;
        }

        const formattedCloudinaryItems = data.resources.map((resource) => {
          const context = resource.context?.custom || {};
          const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
          
          const isHeic = resource.format?.toLowerCase() === 'heic';
          const optimizedSrc = isHeic 
            ? `${baseUrl}/f_jpg,q_auto/v${resource.version}/${resource.public_id}.jpg`
            : `${baseUrl}/f_auto,q_auto/v${resource.version}/${resource.public_id}.${resource.format}`;
            
          const rawSrc = `${baseUrl}/v${resource.version}/${resource.public_id}.${resource.format}`;
          const descriptionText = (context.alt || "").toLowerCase();
          
          let assignedCategory = 'oblique'; 
          
          if (descriptionText.includes('brush')) {
            assignedCategory = 'brush';
          } else if (descriptionText.includes('straight')) {
            assignedCategory = 'straight';
          } else if (descriptionText.includes('oblique')) {
            assignedCategory = 'oblique';
          }

          return {
            title: context.caption || "Untitled Calligraphy",
            script: context.alt || "Handwritten Script",
            category: assignedCategory, 
            imgSrc: optimizedSrc,
            rawSrc: rawSrc 
          };
        });

        // 3. Combine Cloudinary items with your Local Signature items here
        setGalleryItems([...formattedCloudinaryItems, ...LOCAL_SIGNATURES]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch pipeline exception:", err);
        // Fallback to local signatures if the network fetch breaks completely
        setGalleryItems(LOCAL_SIGNATURES);
        setLoading(false);
      });
  }, []);

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 min-h-[80vh]">
      
      {/* Header */}
      <div className="border-l-4 border-[#E07A5F] pl-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-[#2C2520]">Ink & Flourish</h1>
        <p className="text-gray-500 mt-2">Exhibits of focused stroke work exploring pressure and thin structural lines.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10 border-b border-[#E07A5F]/10 pb-4">
        {['all', 'oblique', 'brush', 'straight', 'signature'].map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all uppercase tracking-wider ${
              activeFilter === cat 
                ? 'bg-[#E07A5F] text-[#FFFDF9] shadow-sm' 
                : 'bg-[#F4F1DE] text-[#2C2520] hover:bg-[#E07A5F]/10'
            }`}
          >
            {cat === 'all' 
              ? 'All Scripts' 
              : cat === 'oblique' 
              ? 'Oblique Pen' 
              : cat === 'brush' 
              ? 'Brush Pen' 
              : cat === 'straight' 
              ? 'Straight Pen'
              : 'Signature'}
          </button>
        ))}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 space-y-3">
          <div className="w-8 h-8 border-2 border-[#E07A5F] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-center text-gray-400 font-mono text-xs">Loading artwork matrix...</p>
        </div>
      )}

      {/* Masonry Grid */}
      {!loading && (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(item.rawSrc)} 
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
      )}
      
      {!loading && filteredItems.length === 0 && (
        <p className="text-center text-gray-400 font-mono text-sm py-12">No scripts found in this category yet.</p>
      )}

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img 
            src={selectedImage} 
            alt="Full screen portfolio view" 
            className="max-w-full max-h-[90vh] object-contain rounded-md"
          />
        </div>
      )}

    </div>
  );
}