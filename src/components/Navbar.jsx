import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Apartment", link: "/apartment-list" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link to={"/"}>
            <img
              src="images/logo.jpeg"
              alt="Travel Company Logo"
              className="h-20 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.a
                href={item.link}
                whileHover={{ y: -2 }}
                className="text-[13px] uppercase tracking-widest text-gray-700 hover:text-[#D4AF37] font-bold transition-colors"
              >
                {item.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-[#73430C] transition-colors"
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <motion.path
              animate={
                open
                  ? { d: "M6 18L18 6M6 6l12 12" }
                  : { d: "M4 6h16M4 12h16M4 18h16" }
              }
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-8 gap-6">
              {menu.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={item.link}
                    className="block text-sm uppercase font-bold text-gray-700 hover:text-[#D4AF37]"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}

              <motion.a
                href="/contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 bg-[#D4AF37] text-white text-center py-4 text-xs uppercase tracking-widest font-bold"
              >
                Contact Us
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
