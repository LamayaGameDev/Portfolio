import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiUnity, SiFirebase, SiSwift } from "react-icons/si";

const projects = [
  {
    title: "$OrbAI",
    desc: "An AI Twitch streamer. Hit market cap of $140,000 on SOL.",
    link: "http://orbai.live",
    github: "https://github.com/naveen-gunawardana/Orb-AI",
    technologies: [FaReact, FaPython, FaCss3Alt]
  },
  {
    title: "Food Shelter Finder",
    desc: "AI chatbot helping users find food and shelter in their area.",
    link: "http://foodshelterfinder.com",
    technologies: [FaReact, FaCss3Alt, FaPython] 
  },
  {
    title: "Jocular Julius",
    desc: "AI Latin tutor that users can vocally communicate with.",
    link: "https://github.com/naveen-gunawardana/ChatBackend/tree/main",
    github: "https://github.com/naveen-gunawardana/ChatBackend/tree/main",
    technologies: [FaReact, FaPython, FaCss3Alt]
  },
  {
    title: "Agentic AI",
    desc: "Created agentic powered AI solutions for Web3.",
    link: "http://x.com/agenticai_sol",
    github: "https://github.com/naveen-gunawardana/Agentic-AI",
    technologies: [FaReact, FaPython, FaJsSquare]
  },
  {
    title: "Falling for Latin",
    desc: "A fun multi-player quiz game about Ancient Pompeii.",
    github: "https://github.com/naveen-gunawardana/FallingForLatin",
    technologies: [SiCplusplus, SiUnity]
  },
  {
    title: "Pompeiian Villa",
    desc: "Walkable 3D recreation of a Pompeiian Villa.",
    github: "https://github.com/naveen-gunawardana/PompeiianVilla", // Replace with actual GitHub URL
    technologies: [SiCplusplus, SiUnity]
  }
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
            className="relative w-[350px] md:w-[480px] bg-white/10 rounded-lg overflow-hidden backdrop-blur-md p-6 flex flex-col transition-all cursor-default"
            whileHover={{ scale: 1.02 }}
          >
            {/* Project Details */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.desc}</p>

              {/* Buttons and Icons */}
              <div className="flex items-center gap-4 mt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 border border-white rounded-md text-white transition-all duration-300 hover:bg-white/20 cursor-pointer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border border-white rounded-md text-white transition-all duration-300 hover:bg-white/20 cursor-pointer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <div className="flex gap-2 ml-2">
                  {project.technologies.map((Icon, idx) => (
                    <Icon key={idx} className="w-5 h-5 text-white" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
