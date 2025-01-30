import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaProjectDiagram, FaRocket, FaDatabase, FaGithub } from "react-icons/fa";
import { VscFilePdf } from "react-icons/vsc";  // Using Visual Studio Code icons library for PDF icon

const experiences = [
  {
    title: "Student - San Francisco University High School",
    company: "Independent",
    date: "24-28",
    description: "Class of 2028 at San Francisco University High School.",
    icon: <FaCode className="text-white text-xl" />,
    side: "right",
  },
  {
    title: "Research - Diabetic Retinopathy ML Model",
    company: "Teens In Health",
    date: "24",
    description: "Created AI Diabetic Retinopathy bot which open source tools and compared it to industry standards in published paper.",
    icon: <FaDatabase className="text-white text-xl" />,
    link: "https://drive.google.com/file/d/1apGJoTC_U8e6zZhzarxrS4vg-wa5UTFI/view?usp=sharing",
    side: "left",
  },
  {
    title: "Intern - Twilio Suit Up",
    company: "Twilio",
    date: "24",
    description: "Developed an AI Latin tutor users can vocally communicate with.",
    icon: <FaProjectDiagram className="text-white text-xl" />,
    github: "https://github.com/naveen-gunawardana/ChatBackend/tree/main",
    side: "right",
  },
  {
    title: "Intern - Web Developer",
    company: "Jaldi",
    date: "23",
    description: "Bug fixed for Jaldi mobile app and web store.",
    icon: <FaRocket className="text-white text-xl" />,
    link: "https://drive.google.com/file/d/1gbLO5N3GQTk83CRO-df7cc3mBJIqI1f-/view?usp=sharing",
    side: "left",
  },
];

const Timeline = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center p-10 mb-70">
      <motion.h2
        className="text-5xl font-bold mb-14 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience Timeline
      </motion.h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-16 flex items-center w-full ${exp.side === "left" ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Left Side Experiences */}
            {exp.side === "left" && (
              <div className="w-5/12 p-4 flex flex-col space-y-2 relative">
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <h4 className="text-lg text-gray-300">{exp.company}</h4>
                <span className="text-sm text-gray-400">{exp.date}</span>
                <p className="text-gray-200">{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  >
                    <VscFilePdf />
                  </a>
                )}
              </div>
            )}

            {/* Right Side Experiences */}
            {exp.side === "right" && (
              <div className="w-5/12 p-4 flex flex-col space-y-2 relative">
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <h4 className="text-lg text-gray-300">{exp.company}</h4>
                <span className="text-sm text-gray-300">{exp.date}</span>
                <p className="text-gray-200">{exp.description}</p>
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
