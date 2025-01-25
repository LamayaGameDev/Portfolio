import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "$OrbAI",
    desc: "An AI-powered omniscient Twitch streamer that interacts dynamically with viewers. Hit market cap of $140,000.",
    link: "#",
    github: "https://github.com/yourusername/orbai",
    image: "https://via.placeholder.com/600x350/ddd/999?text=OrbAI",
  },
  {
    title: "Food Shelter Finder",
    desc: "AI chatbot helping users find food and shelter in their area.",
    link: "#",
    github: "https://github.com/yourusername/biobattlers",
    image: "https://via.placeholder.com/600x350/ddd/999?text=BioBattlers",
  },
  {
    title: "Jocular Julius",
    desc: "AI Latin tutor that users can vocally communicate with.",
    link: "#",
    github: "https://github.com/yourusername/memecoin",
    image: "https://via.placeholder.com/600x350/ddd/999?text=Memecoin",
  },
  {
    title: "Agentic AI",
    desc: "Created agentic powered AI solutions for Web3.",
    link: "#",
    github: "https://github.com/yourusername/memecoin",
    image: "https://via.placeholder.com/600x350/ddd/999?text=Memecoin",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col items-center text-center select-none">
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-bold mb-14 text-white cursor-default"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-[350px] md:w-[480px] bg-white/10 border border-gray-700 rounded-lg overflow-hidden shadow-lg backdrop-blur-md p-6 flex flex-col transition-all hover:shadow-2xl cursor-default"
            whileHover={{ scale: 1.02 }}
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80 pointer-events-none"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col mt-4">
              {/* Removed Extra Title Above */}
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.desc}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border border-white rounded-md text-white transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-pointer"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border border-white rounded-md text-white transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-pointer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
