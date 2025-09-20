import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Translator from "./Translator";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPinterest, FaPrint, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const [visits, setVisits] = useState(0);
  const [showTranslator, setShowTranslator] = useState(false);
  const hasIncremented = useRef(false); // ✅ FIX: Declare useRef

  useEffect(() => {
    if (hasIncremented.current) return; // Exit if already incremented
    hasIncremented.current = true;

    let totalVisits = parseInt(localStorage.getItem("total_visits") || "0");
    totalVisits += 1;
    localStorage.setItem("total_visits", totalVisits);
    setVisits(totalVisits);
  }, []);

  return (
    <footer className="bg-[#0F0F0F] text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold">About</h3>
            <img
              src="/images/IMG-20250915-WA0003[1].jpg"
              alt="Logo"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>

          <p className="text-gray-400">
            At La Décor, we believe every space tells a story. Our passion lies in
            crafting interiors that blend elegance, comfort, and functionality. From
            custom furniture to innovative designs, we aim to transform houses into
            homes filled with warmth, beauty, and timeless charm.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/" className="text-gray-400 hover:text-[#DA6918] transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/7906696289" className="text-gray-400 hover:text-[#DA6918] transition">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.instagram.com/ladecor19/." className="text-gray-400 hover:text-[#DA6918] transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.Facebook.com/" className="text-gray-400 hover:text-[#DA6918] transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.twitter.com/" className="text-gray-400 hover:text-[#DA6918] transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.youtube.com/" className="text-gray-400 hover:text-[#DA6918] transition">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.Pinterest.com/" className="text-gray-400 hover:text-[#DA6918] transition">
              <FaPinterest size={20} />
            </a>
          </div>

          {/* Location & Email */}
          <div className="flex flex-col gap-2 mt-4 text-gray-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#DA6918]" />
              <span>Add. Near K.R Garden Quarsi bye pass road Dhorrah
                , Aligarh, India</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope className="text-[#DA6918]" />
              <span><a href="http://www.ladecorinteriordesignstudio.in">www.ladecorinteriordesignstudio.in</a></span>
            </div>
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
            <li><Link to="/services" className="hover:text-indigo-400">Services</Link></li>
            <li><Link to="/certificate" className="hover:text-indigo-400">Certificates</Link></li>
            <li><Link to="/gallery" className="hover:text-indigo-400">Gallery</Link></li>
            <li><Link to="/video" className="hover:text-indigo-400">Video</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li><a href="/services/pvc-mats">PVC Mats</a></li>
            <li><a href="/services/ptuffan-glass">Tuffan Glass</a></li>
            <li><a href="/services/grass-uv-sheet">Grass UV Sheet</a></li>
            <li><a href="/services/front-elivation">front Elivation</a></li>
            <li><a href="/services/modular-kitchen">Modular Kitchen</a></li>
            <li><a href="/services/wallpaper-rolls">Wallpaper Rolls</a></li>
            <li><a href="/services/customized-wallpaper">Customized Wallpaper</a></li>
            <li><a href="/services/molding-aluminium-fabricataion">Molding Aluminium Fabricataion</a></li>
            <li><a href="/services/artificial-garden-glass-films-&-vinly-blind-(vertical,-rollar,-zebra-&-wooden)">Artificial Garden Glass Films & Vinly Blind (Vertical, Rollar, Zebra & wooden)</a></li>

          </ul>
        </div>

        {/* Contact + Visitor Counter + Translator */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Shop No 1 & 2 Upper Ground Floor  Nr Kr Garden Bypass Road Opposite Owais Karni Masjid Dhorra Aligarh Uttar Pradesh 202001,India
          </p>
          <p className="text-gray-400 mt-2">Phone:+91 7906696289 , 9084549327</p>
          <p className="text-gray-400">
            <a href="mailto:www.ladecorinteriordesignstudio@gmail.com" className="hover:underline">
              WebEmail: ladecorinteriordesignstudio@gmail.com
            </a>
          </p>
          <p className="text-gray-400">
            <a href="mailto:Info@ladecorinteriordesignstudio.in" className="hover:underline">
              Info-Email: Info@ladecorinteriordesignstudio.in
            </a>
          </p>


          {/* Visit Counter (per page load) */}
          <p className="text-gray-400 mt-4 text-sm">
            🔁 Total Page Visits: <span className="font-semibold">{visits}</span>
          </p>

          {/* Translator & Webmail Buttons */}
          <div className="mt-6 flex flex-col gap-4 items-start"> {/* items-start keeps them aligned left */}
            {/* Translator Button */}
            <button
              onClick={() => setShowTranslator(!showTranslator)}
              className="bg-[#000205] hover:bg-[#000e22] text-white px-6 py-2 rounded-lg min-w-[200px]"
            >
              🌍 Translate Website
            </button>
            {showTranslator && <Translator />}

            {/* Webmail Button */}
            <Link
              to="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
              className="bg-[#DA6918] hover:bg-[#ff7f3d] text-white px-6 py-2 rounded-lg text-center font-medium transition transform hover:scale-105 duration-300 min-w-[200px]"
            >
              ✉️ Webmail
            </Link>
          </div>


        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()}
        LA Decor. All rights reserved.
      </div>
    </footer>
  );
}