import React from "react";
import { socialLinks } from "../../data/socials"; // Path check kar lein
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-indigo-400">She Can Foundation</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Empowering communities through education, health, and sustainable growth. Join us in making a difference.
          </p>
        </div>
        
        {/* Social Icons Section */}
        <div className="flex flex-col">
          <h4 className="font-bold mb-4">Connect With Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-all hover:scale-110"><FaInstagram /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-all hover:scale-110"><FaLinkedin /></a>
            <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-all hover:scale-110"><FaTwitter /></a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-all hover:scale-110"><FaFacebook /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <a href={socialLinks.email} className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
            <FaEnvelope /> contact@shecanfoundation.org
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-zinc-800 text-center text-zinc-600 text-xs">
        © 2026 She Can Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;