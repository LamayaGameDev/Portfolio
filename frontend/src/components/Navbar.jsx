import { motion } from "framer-motion";

const HoverText = ({ children, link }) => {
  const underlineVariants = {
    rest: {
      width: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <a
        href={link}
        className="transition-all duration-300"
        style={{ 
          position: 'relative', 
          textDecoration: 'none',
          transition: 'text-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.6)'}
        onMouseLeave={(e) => e.currentTarget.style.textShadow = 'none'}
        onClick={(e) => {
          e.preventDefault(); // Prevent instant jump
          const target = document.querySelector(link);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 50, // Adjusts for navbar height
              behavior: "smooth",
            });
          }
        }}
      >
        {children}
        <motion.div
          className="underline"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            height: '2px',
            background: 'white',
            transform: 'translateX(-50%)'
          }}
          variants={underlineVariants}
          initial="rest"
          whileHover="hover"
        />
      </a>
    </div>
  );
};

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full flex justify-center p-4 text-white z-50"
    >
      <ul className="flex space-x-6">
        {[
          { name: "Experiences", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ].map((item, index) => (
          <li key={index} className="cursor-pointer transition">
            <HoverText link={item.link}>
              {item.name}
            </HoverText>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
