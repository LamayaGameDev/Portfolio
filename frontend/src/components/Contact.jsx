import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      {/* Contact Heading */}
      <motion.h2
        className="text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-300 max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Let's connect and create something amazing! Feel free to reach out for collaborations, opportunities, or just to chat.
      </motion.p>

      {/* Social Links (Including Email as an Icon) */}
      <motion.div
        className="mt-8 flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:naveen@example.com"
          className="text-white text-3xl transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
