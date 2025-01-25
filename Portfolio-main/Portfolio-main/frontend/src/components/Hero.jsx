import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import SocialButton from "./SocialButton";

const Hero = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center text-center text-white animated-bg relative overflow-hidden">
      {/* Typing Animation for Name with Subtle Fade-In */}
      <motion.h1
        className="text-8xl font-medium font-sans no-cursor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Typewriter
          words={["Hi, I'm Naveen"]}
          typeSpeed={70} // Speed of typing
          delaySpeed={1000} // Delay before stopping
          cursor={true} // Keeps the blinking cursor
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-2xl text-white no-cursor"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Full Stack Developer based in San Francisco, California.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="mt-6 flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <SocialButton href="https://github.com/yourusername" icon={FaGithub} />
        <SocialButton href="https://linkedin.com/in/yourusername" icon={FaLinkedin} />
        <SocialButton href="/resume.pdf" icon={FaFileAlt} />
      </motion.div>
    </section>
  );
};

export default Hero;
