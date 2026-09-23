import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="bg-[#D4AF37] w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 text-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
          <div className="relative w-full aspect-square max-w-[450px] lg:max-w-none lg:aspect-[4/3] mx-auto">
            
            <div className="absolute top-[2%] left-[2%] w-[58%] bg-white p-1.5 sm:p-2 md:p-3 shadow-[0_8px_20px_rgba(0,0,0,0.2)] border border-gray-100 rotate-[-2deg] z-20">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/apartmentimg1.jpeg"
                  alt="Bliss Court Bedroom Duplex"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[15%] right-[5%] w-[32%] bg-white p-1 sm:p-2 shadow-[0_6px_15px_rgba(0,0,0,0.15)] border border-gray-100 rotate-[3deg] z-10">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/images/apartmentimg2.jpeg"
                  alt="Bliss Court Fully Equipped Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-[12%] left-[8%] w-[34%] bg-white p-1 sm:p-2 shadow-[0_6px_15px_rgba(0,0,0,0.15)] border border-gray-100 rotate-[1deg] z-30">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="/images/apartmentimg3.jpeg"
                  alt="Bliss Court Amenities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-[5%] right-[2%] w-[48%] bg-white p-1.5 sm:p-2 md:p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.2)] border border-gray-100 rotate-[-1deg] z-20">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/images/duplex.jpeg"
                  alt="Bliss Court Spacious Living Area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-4">
          
          <span className="text-white/60 font-semibold tracking-[0.2em] text-[11px] sm:text-xs uppercase mb-3">
            Welcome to Bliss Court Apartments
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide mb-5 sm:mb-6">
            Luxury Short-let Apartments
          </h2>

          <div className="w-24 h-1 mb-6 sm:mb-8 opacity-40 bg-repeat-x bg-[length:8px_4px]" 
               style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1.5px)', backgroundSize: '6px 12px' }} 
          />

          <div className="max-w-xl space-y-4 sm:space-y-6 text-white/90 font-light leading-relaxed text-sm md:text-base">
            <p>
              Welcome to Bliss Court Short-let Apartment, your premier luxury serviced apartment located at 23D 52 Road, Festac, Lagos.
            </p>
            <p>
              Designed with comfort, elegance, and convenience in mind, our beautifully furnished 4-bedroom duplex offers the perfect home away from home for both short and extended stays. Whether you’re visiting Lagos for business, leisure, family gatherings, or relocation, Bliss Court provides a welcoming environment tailored to meet your needs.
            </p>
            <p>
              Guests have the flexibility to book the entire duplex for exclusive use—ideal for families, corporate teams, and group travelers—or reserve individual en-suite rooms for a private, comfortable, and budget-friendly stay.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 w-full sm:w-auto">
            <Link to="/about" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-black hover:text-white rounded-sm">
                Learn More
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;