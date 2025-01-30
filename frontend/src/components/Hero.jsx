import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import SocialButton from "./SocialButton";
import meImage from "../assets/me.jpg"; // Import the image
import { useState } from "react";

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.img
        src={meImage}
        alt="Naveen"
        className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl mb-8 md:mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: .9, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <motion.div className="space-y-4">
        <motion.h1
          className="text-6xl md:text-8xl font-medium font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <Typewriter
            words={['Hi, I\'m Naveen']}
            typeSpeed={70}
            delaySpeed={1000}
            cursor={showCursor}
            onLoopDone={() => setShowCursor(false)}
          />
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          15-year-old full-stack developer from San Francisco.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <SocialButton href="https://github.com/naveen-gunawardana" icon={FaGithub} />
          <SocialButton href="https://www.linkedin.com/in/naveen-gunawardana-b6503231b/" icon={FaLinkedin} />
          <SocialButton href="/naveengunawardana.pdf" download="naveengunawardana.pdf" icon={FaFileAlt} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
