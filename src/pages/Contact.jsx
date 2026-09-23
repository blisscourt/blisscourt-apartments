import React from 'react'

const Contact = () => {
  return (
    <main className="pt-40 bg-[#f9f9f9] min-h-screen font-sans py-12 px-4 md:px-8 lg:px-16 text-[#333333]">
      <div className="max-w-[1200px] mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Contact Us</h1>
        <p className="text-gray-500 font-light tracking-wide">Get in Touch with Bliss Court</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-md shadow-sm border border-neutral-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#73430C] mb-2">Our Location</h3>
            <p className="text-sm font-light text-neutral-600 leading-relaxed">
              23D 52 Road, Festac, Lagos, Nigeria
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border border-neutral-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#73430C] mb-2">Email Address</h3>
            <p className="text-sm font-light text-neutral-600">
              info@blisscourt.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border border-neutral-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#73430C] mb-2">Phone Number</h3>
            <p className="text-sm font-light text-neutral-600">
              +234 (0) 800 000 0000
            </p>
          </div>
        </div>

        {/* Right Side: Simple Contact Form */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-md shadow-sm border border-neutral-100">
          <h3 className="text-xl font-medium text-neutral-800 mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-neutral-600 font-medium mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Name" 
                  className="w-full border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500 placeholder-neutral-400 font-light"
                />
              </div>

              <div>
                <label className="block text-xs text-neutral-600 font-medium mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="w-full border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500 placeholder-neutral-400 font-light"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-neutral-600 font-medium mb-1.5">Subject</label>
              <input 
                type="text" 
                placeholder="Enter Subject" 
                className="w-full border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500 placeholder-neutral-400 font-light"
              />
            </div>

            <div>
              <label className="block text-xs text-neutral-600 font-medium mb-1.5">Message</label>
              <textarea 
                rows="5"
                placeholder="How can we help you?" 
                className="w-full border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500 placeholder-neutral-400 font-light resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-[#73430C] text-white font-medium py-2.5 px-6 rounded text-sm transition-colors hover:bg-[#e0a500] mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}

export default Contact