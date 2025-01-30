import { motion } from "framer-motion";

// HoverText Component Definition
const HoverText = ({ children, link }) => {
  const underlineVariants = {
    rest: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      style={{
        display: 'inline-block',
        position: 'relative',
        background: 'rgba(0, 0, 0, 0.0)', // Slightly transparent black background
        padding: '4px 8px',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
      initial="rest"
      whileHover="hover"
    >
      <a
        href={link}
        style={{ 
          position: 'relative', 
          textDecoration: 'none',
          color: 'white',
          fontWeight: 'bold',
          display: 'block'
        }}
      >
        {children}
        <motion.div
          className="underline"
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '50%',
            height: '2px',
            background: 'white',
            transform: 'translateX(-50%)',
            borderRadius: '2px'
          }}
          variants={underlineVariants}
        />
      </a>
    </motion.div>
  );
};

// Navbar Component Definition
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full flex justify-center p-4 text-white z-50"
    >
      <ul className="flex space-x-6" style={{ marginLeft: '-19px' }}> {/* Adjusted left margin here */}
        {[
          { name: "Experiences", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ].map((item, index) => (
          <li key={index} className="cursor-pointer transition">
            <HoverText link={item.link}>{item.name}</HoverText>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
