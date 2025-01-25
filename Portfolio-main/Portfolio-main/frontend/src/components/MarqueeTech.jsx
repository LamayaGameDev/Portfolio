import Marquee from "react-fast-marquee";
import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiUnity, SiFirebase, SiSwift } from "react-icons/si"; // Added Firebase, Swift, Node.js

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Unity", icon: <SiUnity /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Swift", icon: <SiSwift /> },
];

const MarqueeTech = () => {
  return (
    <div className="py-12 bg-white">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center mx-10 space-x-5 text-4xl font-bold"
          >
            {/* Apply the gradient effect to icons and text */}
            <span className="bg-gradient-to-r from-[#9963c0] via-[#b9a2f8] to-[#3d568b] bg-clip-text text-transparent">
              {tech.icon}
            </span>
            <span className="bg-gradient-to-r from-[#9963c0] via-[#b9a2f8] to-[#3d568b] bg-clip-text text-transparent">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTech;
