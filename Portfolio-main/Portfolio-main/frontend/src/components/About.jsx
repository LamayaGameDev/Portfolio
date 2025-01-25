import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white text-center px-10">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-3xl text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        I'm a developer passionate about AI, web development, and building cool
        things that make an impact. Currently working on **OrbAI, BioBattlers, and Memecoin.**
      </motion.p>
    </section>
  );
};

export default About;
