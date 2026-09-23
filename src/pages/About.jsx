import React from "react";
import { 
  Wifi, 
  Home, 
  Lock, 
  Tv, 
  MapPin, 
  Layers,
  Sparkles,
  Users
} from "lucide-react";

const AboutPage = () => {
  return (
    <main className="bg-[#fcfcfc] text-neutral-800 font-sans antialiased selection:bg-[#D4AF37] selection:text-white">
      
      <section className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center border-b-4 border-[#D4AF37]" style={{ backgroundImage: "url('/images/apartment2.jpeg')" }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        <h1 className="relative z-10 text-3xl md:text-4xl font-normal text-[#73430C] tracking-wide">
          About Us
        </h1>
      </section>

      <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none relative">
            <div className="bg-white p-2 shadow-md border border-neutral-200 rotate-[-2deg] transition-transform hover:rotate-0 duration-300">
              <img src="/images/apartmentimg1.jpeg" alt="Spacious Living Room" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="bg-white p-2 shadow-md border border-neutral-200 rotate-[3deg] transition-transform hover:rotate-0 duration-300 translate-y-4">
              <img src="/images/apartmentimg2.jpeg" alt="Fully Equipped Kitchen" className="w-full aspect-square object-cover" />
            </div>
            <div className="bg-white p-2 shadow-md border border-neutral-200 rotate-[1deg] transition-transform hover:rotate-0 duration-300 -translate-y-2">
              <img src="/images/apartmentimg3.jpeg" alt="En-suite Bedroom" className="w-full aspect-square object-cover" />
            </div>
            <div className="bg-white p-2 shadow-md border border-neutral-200 rotate-[-3deg] transition-transform hover:rotate-0 duration-300 translate-y-2">
              <img src="/images/duplex.jpeg" alt="Stylish Dining Area" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block mb-2">
                Welcome to Bliss Court Apartments
              </span>
              <h2 className="text-2xl md:text-3xl font-normal text-neutral-900 tracking-tight">
                Luxury Short-let
              </h2>
            </div>

            <div className="text-sm md:text-base text-neutral-600 font-light leading-relaxed space-y-4">
              <p>
                Welcome to Bliss Court Short-let Apartment, your premier luxury serviced apartment located on 23D 52 Road, Festac, Lagos.
              </p>
              <p>
                Designed with comfort, elegance, and convenience in mind, our beautifully furnished 4-bedroom duplex offers the perfect home away from home for both short and extended stays. Whether you’re visiting Lagos for business, leisure, family gatherings, or relocation, Bliss Court provides a welcoming environment tailored to meet your needs.
              </p>
              <p>
                Guests have the flexibility to book the entire duplex for exclusive use—ideal for families, corporate teams, and group travelers—or reserve individual en-suite rooms for a private, comfortable, and budget-friendly stay.
              </p>
              <p>
                Our spacious living room and stylish dining area provide the perfect setting to relax, entertain, or enjoy quality time with family, friends, or colleagues. Each of our four fully furnished bedrooms features a private en-suite bathroom, premium bedding, air conditioning, Smart TV, and thoughtfully selected furnishings to ensure a peaceful and restful experience.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-[#f4f4f4] border-t border-b border-neutral-200/60">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 xl:px-32 text-center">
          
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] block mb-2">
            Discover Style & Comfort
          </span>
          <h3 className="text-2xl md:text-3xl font-normal text-neutral-900 mb-4">
            Why Choose Us
          </h3>
          <div className="w-0.5 h-12 bg-[#D4AF37]/40 mx-auto mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
            {[
              { icon: <Home size={36} strokeWidth={1.2} />, label: "4-Bedroom Duplex" },
              { icon: <Layers size={36} strokeWidth={1.2} />, label: "En-suite Bookings" },
              { icon: <Wifi size={36} strokeWidth={1.2} />, label: "High-Speed Internet" },
              { icon: <Tv size={36} strokeWidth={1.2} />, label: "Smart TVs" },
              { icon: <Sparkles size={36} strokeWidth={1.2} />, label: "Fully Equipped Kitchen" },
              { icon: <Sparkles size={36} strokeWidth={1.2} />, label: "Housekeeping Services" },
              { icon: <Lock size={36} strokeWidth={1.2} />, label: "Secure Environment" },
              { icon: <MapPin size={36} strokeWidth={1.2} />, label: "Heart of Festac Town" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 group">
                <div className="text-[#D4AF37] group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="text-xs md:text-sm font-medium text-neutral-700 tracking-wide max-w-[140px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto text-center">
        <h3 className="text-2xl font-normal text-neutral-900 mb-12 tracking-tight">
          Bliss Court is the perfect accommodation for:
        </h3>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "Business travelers",
            "Families on vacation",
            "Tourists exploring Lagos",
            "Corporate executives and teams",
            "Groups attending events",
            "Professionals relocating to Lagos",
            "Long-term and short-term stays"
          ].map((useCase, index) => (
            <span 
              key={index}
              className="px-5 py-2.5 bg-white border border-neutral-200 shadow-sm rounded-full text-xs md:text-sm font-light text-neutral-600 tracking-wide hover:border-[#D4AF37]/40 transition-colors"
            >
              {useCase}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#D4AF37] text-white py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base md:text-lg font-light leading-relaxed text-white/90">
            At Bliss Court Short-let Apartment, we are dedicated to providing exceptional hospitality, outstanding service, and a relaxing atmosphere where every guest feels safe, comfortable, and truly at home.
          </p>
          <div className="pt-4 text-xs md:text-sm tracking-[0.2em] font-medium uppercase text-white/70 flex flex-wrap justify-center gap-4 sm:gap-6">
            <span>Experience comfort</span>
            <span className="opacity-40">•</span>
            <span>Enjoy luxury</span>
            <span className="opacity-40">•</span>
            <span>Create lasting memories at Bliss Court</span>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;