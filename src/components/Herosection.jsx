import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const apartmentImages = [
  "/images/apartment1.jpeg",
  "/images/apartmentimg1.jpeg",
  "/images/apartmentimg2.jpeg",
  "/images/apartmentimg3.jpeg",
  "/images/duplex.jpeg",
];

const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % apartmentImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={apartmentImages[currentIndex]}
              alt={`Bliss Court Apartment ${currentIndex + 1}`}
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_100%)] z-10" />
      </div>

      <motion.div 
        className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={itemVariants}
          className="inline-block text-[10px] tracking-[0.3em] uppercase text-white mb-8 pb-2"
        >
            Bliss Court Apartments
        </motion.span>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-light text-white tracking-tight leading-none mb-6"
        >
          Luxury Shortlet Apartment in <span className="font-medium text-[#D4AF37]">Festac, Lagos</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-sm md:text-lg text-white font-light leading-relaxed mb-12"
        >
          Experience premium living spaces crafted with modern architecture, 
          exceptional comfort.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/apartment-list" className="inline-block">
          <motion.p
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-3 overflow-hidden bg-white text-black text-sm font-medium transition-all hover:bg-[#D4AF37] hover:text-white"
            >
            Book Now
          </motion.p>
            </Link>

          <motion.a
            target='_blank' href="https://wa.me/2348152067480"
            whileHover={{ x: 5 }}
            className="text-sm font-medium text-white hover:text-green-500 transition-colors flex items-center gap-2"
          >
            Chat on WhatsApp
            <span className="text-xl">→</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent to-gray-500/50 z-20" 
      />
    </section>
  );
};

export default Herosection;