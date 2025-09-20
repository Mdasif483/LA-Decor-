import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-30">
      {/* Call Button */}
      <a
        href="+917906696289" // yaha apna number daalo
        className="bg-[#DA6918] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/7906696289" // yaha apna whatsapp number daalo
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

export default FloatingContact;
