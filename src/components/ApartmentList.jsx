import { link } from 'framer-motion/client'
import React from 'react'
import { Link } from 'react-router'

const ApartmentList = () => {
  const options = [
    {
      id: 'full-duplex',
      title: 'Full Duplex',
      tag: 'Exclusive Stay',
      description: 'Enjoy the flexibility to book the entire duplex for exclusive use—ideal for families, corporate teams, and group travelers. Features a spacious living room, stylish dining area, fully equipped kitchen, and four complete en-suite bedrooms for absolute privacy.',
      price: '250,000', 
      image: '/images/duplex.jpeg',
      link: '/apartment-duplex',
      features: [
        '4 Fully furnished en-suite bedrooms',
        'Spacious living and dining areas',
        'Fully equipped kitchen',
        'High-speed Wi-Fi & Smart TVs',
        'Secure and peaceful environment'
      ]
    },
    {
      id: 'serenity',
      title: 'Serenity',
      tag: 'Private Stay',
      description: 'Reserve individual en-suite rooms for a private, comfortable, and budget-friendly stay. Each beautifully furnished bedroom features a private en-suite bathroom, premium bedding, air conditioning, Smart TV, and access to shared common spaces.',
      price: '80,000', 
      image: '/images/serenity.jpeg',
      link: '/apartment-serenity',
      features: [
        'Private en-suite bathroom',
        'Premium bedding & Air conditioning',
        'Private Smart TV',
        'Access to shared living/dining area',
        'Housekeeping services'
      ]
    },
    {
      id: 'emerald',
      title: 'Emerald',
      tag: 'Private Stay',
      description: 'Reserve individual en-suite rooms for a private, comfortable, and budget-friendly stay. Each beautifully furnished bedroom features a private en-suite bathroom, premium bedding, air conditioning, Smart TV, and access to shared common spaces.',
      price: '65,000', 
      image: '/images/emerald.jpeg',
      link: '/apartment-emerald',
      features: [
        'Private en-suite bathroom',
        'Premium bedding & Air conditioning',
        'Private Smart TV',
        'Access to shared living/dining area',
        'Housekeeping services'
      ]
    },
    {
      id: 'retreat',
      title: 'Retreat',
      tag: 'Private Stay',
      description: 'Reserve individual en-suite rooms for a private, comfortable, and budget-friendly stay. Each beautifully furnished bedroom features a private en-suite bathroom, premium bedding, air conditioning, Smart TV, and access to shared common spaces.',
      price: '60,000', 
      image: '/images/apartment3.png',
      link: '/apartment-retreat',
      features: [
        'Private en-suite bathroom',
        'Premium bedding & Air conditioning',
        'Private Smart TV',
        'Access to shared living/dining area',
        'Housekeeping services'
      ]
    },
    {
      id: 'oasis',
      title: 'Oasis',
      tag: 'Private Stay',
      description: 'Reserve individual en-suite rooms for a private, comfortable, and budget-friendly stay. Each beautifully furnished bedroom features a private en-suite bathroom, premium bedding, air conditioning, Smart TV, and access to shared common spaces.',
      price: '50,000', 
      image: '/images/oasis.jpeg',
      link: '/apartment-oasis',
      features: [
        'Private en-suite bathroom',
        'Premium bedding & Air conditioning',
        'Private Smart TV',
        'Access to shared living/dining area',
        'Housekeeping services'
      ]
    }
  ]

  return (
    <main className="pt-40 bg-[#f9f9f9] min-h-screen font-sans py-12 px-4 md:px-8 lg:px-16 text-[#333333]">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Our Accommodation Options</h1>
        <p className="text-gray-500 font-light tracking-wide max-w-xl mx-auto">
          Choose between reserving the entire exclusive duplex or opting for a private en-suite room layout tailored to your budget.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {options.map((option) => (
          <div 
            key={option.id} 
            className="bg-white rounded-md shadow-sm border border-neutral-100 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Media Container */}
              <div className="w-full overflow-hidden aspect-[16/10] bg-neutral-100 relative">
                {/* <div className="absolute top-4 left-4 bg-neutral-900/80 text-[#f4b400] text-xs font-medium tracking-wider uppercase px-2.5 py-1 rounded">
                  {option.tag}
                </div> */}
                <img 
                  src={option.image} 
                  alt={option.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Meta Content */}
              <div className="p-6 md:p-8 space-y-4">
                <h2 className="text-xl md:text-2xl font-medium text-neutral-800 leading-tight">
                  {option.title}
                </h2>
                
                <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
                  {option.description}
                </p>

                <div className="pt-4 border-t border-neutral-100">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Key Features</h3>
                  <ul className="space-y-2 text-xs md:text-sm text-neutral-600 font-light">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-[#f4b400] font-bold">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer Box */}
            <div className="p-6 md:p-8 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between gap-4 mt-auto">
              <div>
                <p className="text-[10px] uppercase font-medium text-neutral-400 tracking-wider">Price per Night</p>
                <p className="text-xl md:text-2xl font-semibold text-neutral-800">
                  ₦{option.price} <span className="text-xs font-light text-neutral-500">/ night</span>
                </p>
              </div>

              <Link to={option.link} rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#f4b400] text-neutral-900 font-medium py-2.5 px-6 rounded text-sm transition-colors hover:bg-[#e0a500] shadow-xs whitespace-nowrap">
                View & Book
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ApartmentList