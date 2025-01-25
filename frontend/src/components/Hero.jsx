import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import SocialButton from "./SocialButton";
import meImage from "../assets/me.jpg"; // Import the image
import { useState } from "react";

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <section id="hero" className="relative flex flex-col justify-center items-center text-center min-h-screen">
      {/* Profile Image - Positioned Higher & Above the Text */}
      <motion.img
        src={meImage}
        alt="Naveen"
        className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl 
                   absolute top-10 md:top-30 lg:top-65 z-0 opacity-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: .9, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Typing Animation for Name */}
      <motion.h1
        className="text-6xl md:text-5.5xl font-medium font-sans no-cursor mt-60 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Typewriter
          words={['Hi, I\'m Naveen']}
          typeSpeed={70}
          delaySpeed={1000}
          cursor={showCursor}
          onLoopDone={() => setShowCursor(false)} // Remove cursor after typing finishes
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-white no-cursor relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        15-year-old full-stack developer from San Francisco.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="mt-6 flex space-x-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <SocialButton href="https://github.com/yourusername" icon={FaGithub} />
        <SocialButton href="https://linkedin.com/in/yourusername" icon={FaLinkedin} />
        <SocialButton href="/resume.pdf" icon={FaFileAlt} />
      </motion.div>
    </section>
  );
};

export default Hero;
