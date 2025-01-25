import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full flex justify-center p-4 text-white z-50"
    >
      <div className="flex space-x-6">
        <ul className="flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li key={index} className="nav-link cursor-pointer transition no-cursor">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
