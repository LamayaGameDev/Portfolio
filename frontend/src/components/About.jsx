import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaProjectDiagram, FaRocket, FaDatabase, FaGithub } from "react-icons/fa";

const experiences = [
  {
    title: "Student - University High School",
    company: "Independent",
    date: "24-28",
    description: "Building an AI-platform for agentic powered solutions.",
    icon: <FaCode className="text-black text-xl opacity-70" />,
   
    side: "right",
  },
  {
    title: "Research - Diagnosing Diabetic Retinopathy With AI",
    company: "Teens In Health",
    date: "24",
    description: "Created AI Diabetic Retinopathy bot which open source tools and compared it to industry standards in published paper.",
    icon: <FaDatabase className="text-black text-xl opacity-70" />,
    github: "https://github.com/yourusername/ai-research",
    side: "left",
  },
  {
    title: "Intern - Twilio Suit Up",
    company: "Twilio",
    date: "24",
    description: "Developed a AI Latin tutor users can vocally communicate with.",
    icon: <FaProjectDiagram className="text-black text-xl opacity-70" />,
    github: "https://github.com/yourusername/biobattlers",
    side: "right",
  },
  {
    title: "Project - Food Shelter Finder",
    company: "Independent",
    date: "24",
    description: "Created full stack AI application to help homeless find food / shelter in their area.",
    icon: <FaBriefcase className="text-black text-xl opacity-70" />,
    github: "https://github.com/yourusername/memecoin",
    side: "left",
  },
 
  {
    title: "Intern - Web Developer",
    company: "Jaldi",
    date: "23",
    description: "Bug fixed for Jaldi mobile app and web store.",
    icon: <FaRocket className="text-black text-xl opacity-70" />,
  
    side: "right",
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
            className={`mb-16 flex items-center w-full ${
              exp.side === "left" ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            {/* Left Side Experiences */}
            {exp.side === "left" && (
              <>
                <div className="w-5/12 p-4 flex flex-col space-y-2">
                  <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  <h4 className="text-lg text-gray-300">{exp.company}</h4>
                  <span className="text-sm text-gray-400">{exp.date}</span>
                  <p className="text-gray-200">{exp.description}</p>

                  {/* GitHub Button */}
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
                <div className="relative w-1/12 flex justify-center">
                  {/* Icon */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-white shadow-lg z-10">
                    {exp.icon}
                  </div>
                  {/* Branch Line Extending Right */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-16 h-1 bg-white left-0"></div>
                </div>
              </>
            )}

            {/* Right Side Experiences */}
            {exp.side === "right" && (
              <>
                <div className="relative w-1/12 flex justify-center">
                  {/* Icon */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white bg-white shadow-lg z-10">
                    {exp.icon}
                  </div>
                  {/* Branch Line Extending Left */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-16 h-1 bg-white right-0"></div>
                </div>
                <div className="w-5/12 p-4 flex flex-col space-y-2">
                  <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  <h4 className="text-lg text-gray-300">{exp.company}</h4>
                  <span className="text-sm text-gray-300">{exp.date}</span>
                  <p className="text-gray-200">{exp.description}</p>

                  {/* GitHub Button */}
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
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
