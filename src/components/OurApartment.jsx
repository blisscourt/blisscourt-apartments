import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const apartmentDetails = {
  name: "Our Apartment",
  location: "23D 52 Road, Festac, Lagos",
  description: "Our beautifully furnished 4-bedroom duplex offers the perfect home away from home for both short and extended stays. Guests have the flexibility to book the entire duplex for exclusive use—ideal for families, corporate teams, and group travelers—or reserve individual en-suite rooms for a private, comfortable, and budget-friendly stay.",
  subDescription: "Our spacious living room and stylish dining area provide the perfect setting to relax, entertain, or enjoy quality time with family, friends, or colleagues. Each of our four fully furnished bedrooms features a private en-suite bathroom, premium bedding, air conditioning, Smart TV, and thoughtfully selected furnishings to ensure a peaceful and restful experience.",
  features: [
    "Luxury fully furnished 4-bedroom duplex",
    "Individual en-suite room bookings available",
    "Entire apartment available for exclusive stays",
    "Spacious living and dining areas",
    "High-speed Wi-Fi & Smart TVs",
    "Fully equipped kitchen & Housekeeping services",
    "Secure and peaceful environment",
    "Convenient location in the heart of Festac Town"
  ],
  images: [
    "/images/apartment1.jpeg",
  "/images/apartmentimg1.jpeg",
  "/images/apartmentimg2.jpeg",
  "/images/apartmentimg3.jpeg",
  "/images/duplex.jpeg",
    "/images/apartment2.jpeg",
  ]
};

const OurApartment = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section className="bg-white w-full min-h-screen text-[#0a0a0a] py-24 px-6 md:px-16 lg:px-24 xl:px-32 flex items-center overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Dynamic Image Gallery Preview */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full h-[350px] md:h-[500px] relative overflow-hidden rounded-sm bg-gray-50">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeImageIndex}
                src={apartmentDetails.images[activeImageIndex]}
                alt={`${apartmentDetails.name} Preview`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          
          {/* Thumbnail Track */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {apartmentDetails.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-sm transition-all duration-300 ${
                  activeImageIndex === index ? "ring-2 ring-[#D4AF37] opacity-100" : "opacity-60 hover:opacity-90"
                }`}
              >
                <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Copy Specifications & Booking */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-light text-black tracking-tight mb-2">
            {apartmentDetails.name}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm font-light text-gray-500 tracking-wide mb-8 flex items-center gap-2">
            {/* <span className="text-[#D4AF37]">📍</span> {apartmentDetails.location} */}
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-6 max-w-xl text-sm md:text-base text-gray-600 font-light leading-relaxed mb-8">
            <p>{apartmentDetails.description}</p>
            <p>{apartmentDetails.subDescription}</p>
          </motion.div>

          {/* Premium Bullet Features Grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium mb-4">Amenities & Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-light">
              {apartmentDetails.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link to="/apartment-list" rel="noopener noreferrer" className="inline-block">
              <button className="group relative px-12 py-4 overflow-hidden bg-black text-white text-sm font-medium transition-all hover:bg-[#D4AF37] uppercase tracking-wider">
                Book Apartment
              </button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurApartment;