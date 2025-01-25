import { motion } from "framer-motion";

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
          { name: "Home", link: "#hero" },
          { name: "Experiences", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ].map((item, index) => (
          <li key={index} className="cursor-pointer transition">
            <a
              href={item.link}
              className="hover:text-gray-400 transition-all duration-300"
              onClick={(e) => {
                e.preventDefault(); // Prevent instant jump
                const target = document.querySelector(item.link);
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop - 50, // Adjusts for navbar height
                    behavior: "smooth",
                  });
                }
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
