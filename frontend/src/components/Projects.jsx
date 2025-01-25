import { motion } from "framer-motion";

const projects = [
  {
    title: "OrbAI",
    desc: "An AI-powered omniscient Twitch streamer that interacts dynamically with viewers.",
    link: "#",
    github: "https://github.com/yourusername/orbai",
    image: "https://via.placeholder.com/600x350/ddd/999?text=OrbAI",
  },
  {
    title: "BioBattlers",
    desc: "A gamified community service app where users complete eco-friendly challenges.",
    link: "#",
    github: "https://github.com/yourusername/biobattlers",
    image: "https://via.placeholder.com/600x350/ddd/999?text=BioBattlers",
  },
  {
    title: "Memecoin",
    desc: "A meme voting platform powered by Firebase, where the best memes rise to the top.",
    link: "#",
    github: "https://github.com/yourusername/memecoin",
    image: "https://via.placeholder.com/600x350/ddd/999?text=Memecoin",
  },
  {
    title: "Memecoin",
    desc: "A meme voting platform powered by Firebase, where the best memes rise to the top.",
    link: "#",
    github: "https://github.com/yourusername/memecoin",
    image: "https://via.placeholder.com/600x350/ddd/999?text=Memecoin",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-24 flex flex-col items-center text-center">
      <motion.h2
        className="text-4xl font-bold mb-14 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Highlighted Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-[320px] md:w-[380px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-2xl"
            whileHover={{ scale: 1.03 }}
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 flex items-center justify-center bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col items-center">
              <h3
                className="text-2xl font-semibold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #9963c0, #b9a2f8, #7b68ee, #9171d1, #3d568b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{project.desc}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold border border-gray-500 text-gray-700 rounded-md hover:bg-gray-100 transition"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-md text-gray-700 hover:bg-gray-100 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.578 0-.286-.01-1.042-.015-2.046-3.338.724-4.042-1.612-4.042-1.612-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.304 3.49.997.108-.776.42-1.305.764-1.604-2.665-.303-5.466-1.336-5.466-5.935 0-1.313.469-2.388 1.235-3.23-.124-.303-.535-1.523.116-3.175 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.398 3.004-.403 1.02.005 2.048.137 3.004.403 2.293-1.553 3.298-1.23 3.298-1.23.653 1.652.242 2.872.118 3.175.77.842 1.234 1.917 1.234 3.23 0 4.611-2.805 5.627-5.478 5.924.431.372.814 1.103.814 2.222 0 1.605-.014 2.896-.014 3.287 0 .319.193.693.8.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
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
