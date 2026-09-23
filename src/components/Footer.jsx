import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  CloudSun,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white pt-16 pb-8 px-6 md:px-16 lg:px-24 xl:px-32 font-sans border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Segment: Widgets & Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Social Network Hub */}
          <div>
            <h3 className="text-xl font-normal text-[#D4AF37] mb-6">
              Follow Us
            </h3>
            <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-4">
              Our Social Channels
            </p>
            <div className="flex gap-4 text-gray-300 mb-6">
              <a
                target="_blank"
                href="https://www.instagram.com/bliss_court_apartments?utm_source=qr&igsh=ZXZmNWF0b2Y5cDBq"
                className="hover:text-[#D4AF37] transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              {/* <a href="#" className="hover:text-[#D4AF37] transition-colors"><Linkedin size={18} strokeWidth={1.5} /></a> */}
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-xs">
              Follow us on social media to keep up-to-date with latest news,
              discounts and events.
            </p>
          </div>

          {/* Mailing List Form */}
          {/* <div>
            <h3 className="text-xl font-normal text-[#D4AF37] mb-6">Sign up for our mailing list.</h3>
            <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold mb-4">Sign Up For Special Offers</p>
            
            <form className="flex w-full mb-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-[#2a2a2a] text-white px-4 py-3.5 text-xs tracking-wider outline-none placeholder-gray-500 font-light"
              />
              <button type="submit" className="bg-[#D4AF37] text-white px-6 transition-colors hover:bg-black flex items-center justify-center">
                <ArrowRight size={16} />
              </button>
            </form>

            <p className="text-[10px] text-white font-light leading-relaxed">
              By submitting this form, I agree to having my personal and contact information processed and used for the purpose of marketing communications. More details about our Privacy policy can be found at the following link: <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>
            </p>
          </div> */}
        </div>

        {/* Middle Segment: Corporate Branding & Coordinates */}
        <div className="py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-xs text-gray-400 font-light space-y-1">
            <p className="font-semibold text-gray-300">Address:</p>
            <p>23D 52 Road, Festac, Lagos.</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/logo.jpeg"
              className="h-20 w-auto object-contain mb-2"
              alt="Bliss Court Logo"
            />
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white">
              Bliss Court
            </h2>
            <p className="text-[9px] tracking-widest text-gray-500 uppercase">
              apartments
            </p>
          </div>

          <div className="text-xs text-gray-400 font-light space-y-1 md:text-right">
            <p>
              <span className="font-semibold text-gray-300">Tel:</span> +234 916
              070 9420
            </p>
            <p>
              <span className="font-semibold text-gray-300">Email:</span>{" "}
              info@blisscourtapartments.com
            </p>
          </div>
        </div>

        {/* Bottom Segment: Legals & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white font-light">
          <p className="tracking-wide text-center sm:text-right">
            © {currentYear} BLISS COURT APARTMENTS. All Rights Reserved
          </p>
        </div>

        {/* whatsapp icon  */}
        <a
          href="https://wa.me/2348152067480?text=Date%3A%0AApartment%20Type%3A%0AAdults%3A%0AChildren%3A%0ACheck%20in%3A%0ACheck%20out%3A%0APhone%20Number%3A"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-200"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
