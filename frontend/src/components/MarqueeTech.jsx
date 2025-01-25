import Marquee from "react-fast-marquee";
import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiUnity, SiFirebase, SiSwift } from "react-icons/si"; // Added Firebase, Swift, Node.js

const techStack = [
  <FaReact />,
  <FaPython />,
  <FaJs />,
  <SiCplusplus />,
  <SiUnity />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaNodeJs />,
  <SiFirebase />,
  <SiSwift />,
];

const MarqueeTech = () => {
  return (
    <div className="py-12 mb-70"> {/* No background color */}
      <Marquee gradient={false} speed={50} pauseOnHover={false}>
        {techStack.map((icon, index) => (
          <div
            key={index}
            className="mx-20 text-6xl text-white"
          >
            {icon}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeTech;
