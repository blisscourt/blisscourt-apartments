import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import axios from "axios";

const ApartmentOasis = () => {
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);

  const [range, setRange] = useState({
    from: undefined,
    to: undefined,
  });

  const [checkInDate, setCheckInDate] = useState("Check-In");
  const [checkOutDate, setCheckOutDate] = useState("Check-Out");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Room booking function
  const bookRoom = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (checkInDate === "Check-In" || checkOutDate === "Check-Out") {
      alert("Please select both check-in and check-out dates.");
      setLoading(false);
      return;
    }

    const bookingDetails = {
      bookingType: "Oasis",
      checkIn: checkInDate,
      checkOut: checkOutDate,
      adults: adults,
      children: childrenCount,
      phoneNumber: phoneNumber,
      apartmentType: "Single Room",
    };

    try {
      await axios.post(
        "https://blisscourt-backend.onrender.com/book-apartment",
        bookingDetails,
      );
      alert("Booking successful! We will contact you shortly.");
      setLoading(false);

      // Reset form fields
      setCheckInDate("Check-In");
      setCheckOutDate("Check-Out");
      setAdults(1);
      setChildrenCount(0);
      setPhoneNumber("");
    } catch (err) {
      console.error("Error booking room:", err);
      setLoading(false);
    }
  };

  const bookViaWhatsApp = () => {
    if (checkInDate === "Check-In" || checkOutDate === "Check-Out") {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    const message = `Hello, I'd like to book an apartment.

Date: ${new Date().toLocaleDateString()}
Apartment Type: Duplex Apartment
Adults: ${adults}
Children: ${childrenCount}
Check in: ${checkInDate}
Check out: ${checkOutDate}
Phone Number: ${phoneNumber}`;

    const whatsappUrl = `https://wa.me/2348152067480?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="pt-40 bg-[#f9f9f9] min-h-screen font-sans py-12 px-4 md:px-8 lg:px-16 text-[#333333]">
      <div className="max-w-[1200px] mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Oasis</h1>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative">
        {/* Left Side: Room details */}
        <div className="lg:col-span-2 space-y-8 bg-white p-4 md:p-6 rounded-md shadow-sm border border-neutral-100">
          <div className="w-full overflow-hidden rounded-md">
            <img
              src="/images/oasis.jpeg"
              alt="Bliss Court Single Room Interior"
              className="w-full object-cover aspect-[16/10]"
            />
          </div>

          <div className="text-left space-y-6 px-2 md:px-6">
            <h2 className="text-xl md:text-2xl font-medium text-neutral-800 text-center">
              Designed with comfort, elegance, and convenience in mind
            </h2>

            <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
              Designed with comfort, elegance, and convenience in mind, our
              beautifully furnished en-suite single room offers the perfect home
              away from home for both short and extended stays. Whether you’re
              visiting Lagos for business, leisure, or a private getaway, Bliss
              Court provides a welcoming environment tailored to meet your
              needs.
            </p>

            <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
              Guests enjoy the privacy of an individual en-suite room with full
              access to comfortable living amenities, offering a premium and
              budget-friendly stay in a highly secure location.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-medium text-neutral-800 mb-3">
                Why Choose Our Single Room?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-neutral-600 font-light">
                <li className="flex items-start gap-2">
                  • Luxury individual en-suite room
                </li>
                <li className="flex items-start gap-2">
                  • Private bathroom amenities
                </li>
                <li className="flex items-start gap-2">
                  • Cozy and comfortable sleeping space
                </li>
                <li className="flex items-start gap-2">
                  • Access to shared living and dining areas
                </li>
                <li className="flex items-start gap-2">• High-speed Wi-Fi</li>
                <li className="flex items-start gap-2">• Smart TV</li>
                <li className="flex items-start gap-2">
                  • Access to a fully equipped kitchen
                </li>
                <li className="flex items-start gap-2">
                  • Housekeeping services
                </li>
                <li className="flex items-start gap-2">
                  • Secure and peaceful environment
                </li>
                <li className="flex items-start gap-2">
                  • Convenient location in the heart of Festac Town
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Booking Form Widget */}
        <div className="bg-white p-6 rounded-md shadow-md border border-neutral-100 sticky top-6 z-10">
          <div className="mb-6 pb-4 border-b border-neutral-100">
            <span className="text-2xl font-bold text-neutral-800">₦50,000</span>
            <span className="text-neutral-500 text-sm font-light">
              {" "}
              / night
            </span>
            <div className="text-xs text-neutral-400 mt-1">
              Private En-suite Single Room
            </div>
          </div>

          <h3 className="text-lg font-medium text-neutral-800 mb-4 tracking-wide">
            Book Single Room
          </h3>

          <div className="space-y-4">
            {/* Check-In Row Input trigger */}
            <div
              onClick={() => setShowCalendar(true)}
              className="flex items-center gap-4 border border-neutral-200 rounded p-4 cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <svg
                className="w-5 h-5 text-red-800 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-normal text-neutral-600">
                {checkInDate}
              </span>
            </div>

            {/* Check-Out Row Input trigger */}
            <div
              onClick={() => setShowCalendar(true)}
              className="flex items-center gap-4 border border-neutral-200 rounded p-4 cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <svg
                className="w-5 h-5 text-red-800 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span
                className={`text-sm ${checkOutDate === "Check-Out" ? "text-neutral-400 font-light" : "text-neutral-600"}`}
              >
                {checkOutDate}
              </span>
            </div>

            {/* phone number  */}
            <div className="flex items-center gap-4 border border-neutral-200 rounded p-4  hover:bg-neutral-50 transition-colors">
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full outline-none"
                type="text"
                placeholder="Phone Number"
              />
            </div>

            {/* Guests Row Selector */}
            <div className="relative">
              <div
                onClick={() => setShowGuests(!showGuests)}
                className="flex items-center justify-between border border-neutral-200 rounded p-4 cursor-pointer hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <svg
                    className="w-5 h-5 text-red-800 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-sm font-light text-neutral-400">
                    {adults === 1 && childrenCount === 0
                      ? "Guests"
                      : `${adults} Adults, ${childrenCount} Children`}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-neutral-400 transition-transform ${showGuests ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Guest Controls Panel Dropdown */}
              {showGuests && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-neutral-100 shadow-xl rounded p-4 space-y-5 z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-800">
                        Adults
                      </h4>
                      <p className="text-xs text-neutral-400 font-light">
                        Ages 13 or above
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-500"
                      >
                        —
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {adults}
                      </span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-500"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-800">
                        Children
                      </h4>
                      <p className="text-xs text-neutral-400 font-light">
                        Ages 2 to 12
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setChildrenCount(Math.max(0, childrenCount - 1))
                        }
                        className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-500"
                      >
                        —
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {childrenCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setChildrenCount(childrenCount + 1)}
                        className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-500"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              onClick={bookRoom}
              className="w-full bg-[#f4b400] text-neutral-900 font-medium py-3.5 rounded text-sm transition-colors hover:bg-[#e0a500] mt-6 shadow-sm"
            >
              {loading ? "Booking..." : "Book Single Room"}
            </button>

            <button
              type="button"
              onClick={bookViaWhatsApp}
              className="w-full mt-3 border border-green-600 text-green-600 font-medium py-3.5 rounded text-sm hover:bg-green-600 hover:text-white transition-colors"
            >
              Book via WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Custom Designed Calendar Pop-out Modal overlay */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-xl w-[95%] max-w-md md:max-w-4xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-lg">Select Dates</h2>

              <button
                onClick={() => setShowCalendar(false)}
                className="text-sm"
              >
                Close
              </button>
            </div>

            <div className="overflow-x-auto flex justify-center">
              <div className="scale-90 md:scale-100 origin-top">
                <DayPicker
                  mode="range"
                  numberOfMonths={isMobile ? 1 : 2}
                  selected={range}
                  disabled={{ before: new Date() }}
                  onSelect={setRange}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="border px-4 py-2 rounded"
                onClick={() => {
                  setRange({
                    from: undefined,
                    to: undefined,
                  });

                  setCheckInDate("Check-In");
                  setCheckOutDate("Check-Out");
                }}
              >
                Clear
              </button>

              <button
                className="bg-[#b08d44] text-white px-5 py-2 rounded"
                onClick={() => {
                  if (range?.from) {
                    setCheckInDate(format(range.from, "dd-MM-yyyy"));
                  }

                  if (range?.to) {
                    setCheckOutDate(format(range.to, "dd-MM-yyyy"));
                  }

                  setShowCalendar(false);
                }}
              >
                Apply Dates
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ApartmentOasis;
