export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "FinTech Dashboard",
      category: "Financial Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      description: "Modern banking interface with real-time analytics",
      tags: ["Dashboard", "Analytics", "FinTech"]
    },
    {
      title: "E-commerce Platform",
      category: "Online Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      description: "Complete shopping experience with payment integration",
      tags: ["E-commerce", "Shopping", "Payments"]
    },
    {
      title: "Healthcare Portal",
      category: "Medical Technology",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      description: "Patient management system with telemedicine features",
      tags: ["Healthcare", "Portal", "Telemedicine"]
    },
    {
      title: "Real Estate Marketplace",
      category: "Property Technology",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=entropy&auto=format",
      description: "Property listings with virtual tour capabilities",
      tags: ["Real Estate", "Marketplace", "Virtual Tours"]
    },
    {
      title: "Learning Management",
      category: "Education Technology",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      description: "Online education platform with interactive courses",
      tags: ["Education", "LMS", "Online Learning"]
    },
    {
      title: "Restaurant Ordering",
      category: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=entropy&auto=format",
      description: "Food delivery app with menu customization",
      tags: ["Restaurant", "Food Delivery", "Mobile App"]
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 tracking-tight">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our collection of professional landing pages built for various industries and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-gray-300 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 group/btn">
                  View Project
                  <i className="ri-arrow-right-line text-sm group-hover/btn:translate-x-1 transition-transform duration-200"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center gap-3 mx-auto">
            View All Projects
            <i className="ri-external-link-line text-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}