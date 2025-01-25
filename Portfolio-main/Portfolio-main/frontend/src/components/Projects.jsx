import { motion } from "framer-motion";

const projects = [
  { title: "OrbAI", desc: "An AI-powered omniscient Twitch streamer.", link: "#" },
  { title: "BioBattlers", desc: "A gamified community service app.", link: "#" },
  { title: "Memecoin", desc: "A meme voting platform powered by Firebase.", link: "#" },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20 text-center text-white">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-700 rounded-lg bg-black/50 backdrop-blur-lg hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
            <p className="text-gray-300">{project.desc}</p>
            <a href={project.link} className="text-cyan-400 hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
