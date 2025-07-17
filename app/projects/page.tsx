
'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

const projects = [
  {
    id: 8,
    title: "DevStudio",
    category: "Web",
    description: "Professional development studio website showcasing modern web development services and portfolio with clean, contemporary design.",
    image: "https://readdy.ai/api/search-image?query=modern%20development%20studio%20website%20design%20with%20coding%20workspace%2C%20development%20tools%2C%20clean%20white%20background%2C%20professional%20web%20design%20layout%2C%20contemporary%20UI%20elements&width=400&height=300&seq=8&orientation=landscape",
    tags: ["Website", "Development", "Professional"],
    details: "Complete development studio website featuring service showcase, portfolio gallery, team presentation, and modern responsive design with interactive elements.",
    liveDemo: "https://readdy.link/preview/235c2c54-c756-4a29-8183-07b67da04c97/1019673",
    caseStudy: "/projects/case-study/8"
  },
  {
    id: 9,
    title: "FoodHub",
    category: "Web",
    description: "Modern food ordering platform with intuitive menu browsing, seamless ordering process, and real-time delivery tracking for enhanced dining experience.",
    image: "https://readdy.ai/api/search-image?query=modern%20food%20ordering%20website%20interface%20with%20restaurant%20menu%2C%20food%20delivery%20app%20design%2C%20clean%20layout%2C%20food%20photography%2C%20ordering%20system&width=400&height=300&seq=9&orientation=landscape",
    tags: ["Food Ordering", "Restaurant", "Delivery"],
    details: "Complete food ordering platform featuring restaurant discovery, menu browsing, cart management, order tracking, and delivery coordination with modern responsive design.",
    liveDemo: "https://readdy.link/preview/34bfd858-dc93-4686-8435-fb54a084f7de/1016208",
    caseStudy: "/projects/case-study/9"
  },
  {
    id: 1,
    title: "E-Commerce Mobile App",
    category: "Mobile",
    description: "A modern e-commerce mobile application with intuitive navigation and seamless checkout experience.",
    image: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20mobile%20app%20interface%20design%20with%20clean%20white%20background%2C%20shopping%20cart%2C%20product%20cards%2C%20minimalist%20UI%20elements%2C%20professional%20mobile%20design%20mockup&width=400&height=300&seq=1&orientation=landscape",
    tags: ["UI/UX", "Mobile", "React Native"],
    details: "Complete mobile app design from wireframes to high-fidelity prototypes. Focused on user journey optimization and conversion rate improvement.",
    liveDemo: "/projects/demo/1",
    caseStudy: "/projects/case-study/1"
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    category: "Web",
    description: "Clean and professional dashboard design for healthcare professionals to manage patient data effectively.",
    image: "https://readdy.ai/api/search-image?query=healthcare%20dashboard%20interface%20design%20with%20medical%20charts%2C%20patient%20data%20visualization%2C%20clean%20white%20background%2C%20professional%20medical%20software%20UI%20design&width=400&height=300&seq=2&orientation=landscape",
    tags: ["Dashboard", "Healthcare", "Data Visualization"],
    details: "Comprehensive dashboard solution with real-time data visualization, patient management system, and intuitive navigation for medical professionals.",
    liveDemo: "/projects/demo/2",
    caseStudy: "/projects/case-study/2"
  },
  {
    id: 3,
    title: "Financial App Redesign",
    category: "Redesign",
    description: "Complete redesign of a financial application focusing on improved user experience and modern aesthetics.",
    image: "https://readdy.ai/api/search-image?query=financial%20banking%20app%20redesign%20interface%20with%20modern%20UI%2C%20charts%2C%20transaction%20history%2C%20clean%20white%20background%2C%20professional%20fintech%20design&width=400&height=300&seq=3&orientation=landscape",
    tags: ["Redesign", "FinTech", "Mobile"],
    details: "Redesigned legacy financial app with focus on accessibility, modern design principles, and enhanced user engagement.",
    liveDemo: "/projects/demo/3",
    caseStudy: "/projects/case-study/3"
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Web",
    description: "Elegant restaurant website with online reservation system and interactive menu design.",
    image: "https://readdy.ai/api/search-image?query=elegant%20restaurant%20website%20design%20with%20food%20photography%2C%20menu%20layout%2C%20reservation%20system%2C%20clean%20white%20background%2C%20modern%20web%20design&width=400&height=300&seq=4&orientation=landscape",
    tags: ["Website", "Restaurant", "Booking System"],
    details: "Full-service restaurant website featuring online reservations, interactive menu, gallery, and contact information with responsive design.",
    liveDemo: "/projects/demo/4",
    caseStudy: "/projects/case-study/4"
  },
  {
    id: 5,
    title: "Learning Platform UI",
    category: "Web",
    description: "Educational platform interface design with course management and progress tracking features.",
    image: "https://readdy.ai/api/search-image?query=online%20learning%20platform%20interface%20design%20with%20course%20cards%2C%20progress%20bars%2C%20educational%20dashboard%2C%20clean%20white%20background%2C%20modern%20e-learning%20UI&width=400&height=300&seq=5&orientation=landscape",
    tags: ["Education", "Platform", "UI/UX"],
    details: "Comprehensive learning management system with student dashboard, course progression, interactive lessons, and assessment tools.",
    liveDemo: "/projects/demo/5",
    caseStudy: "/projects/case-study/5"
  },
  {
    id: 6,
    title: "Travel App Concept",
    category: "Mobile",
    description: "Travel planning application with destination discovery and itinerary management capabilities.",
    image: "https://readdy.ai/api/search-image?query=travel%20planning%20mobile%20app%20interface%20design%20with%20destination%20cards%2C%20map%20integration%2C%20booking%20features%2C%20clean%20white%20background%2C%20modern%20travel%20app%20UI&width=400&height=300&seq=6&orientation=landscape",
    tags: ["Travel", "Mobile", "Planning"],
    details: "Complete travel app concept featuring destination discovery, trip planning, booking integration, and social sharing features.",
    liveDemo: "/projects/demo/6",
    caseStudy: "/projects/case-study/6"
  },
  {
    id: 7,
    title: "Corporate Website",
    category: "Web",
    description: "Professional corporate website design with modern layout and comprehensive company information.",
    image: "https://readdy.ai/api/search-image?query=professional%20corporate%20business%20website%20design%20with%20team%20photos%2C%20services%20section%2C%20modern%20layout%2C%20clean%20white%20background%2C%20contemporary%20web%20design&width=400&height=300&seq=7&orientation=landscape",
    tags: ["Corporate", "Website", "Business"],
    details: "Full corporate website solution including company overview, services, team profiles, case studies, and contact information.",
    liveDemo: "/projects/demo/7",
    caseStudy: "/projects/case-study/7"
  }
];

const categories = ["All", "Web", "Mobile", "Redesign"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest UI/UX design work and web development projects. Each project represents a unique challenge and creative solution.
          </p>
        </div>

        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex space-x-2 bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
