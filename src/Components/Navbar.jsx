import React, { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-scroll'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-[#FEEBDD] font-sans min-h-[60px]"
      >
        <div className="max-w-[1024px] mx-auto px-4 py-4 md:px-7 flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl font-black uppercase cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <b className="text-primary">Caffine</b> Cove
          </motion.h1>

          {/* Menu Icon (hide when sidebar is open) */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <BiMenu className="text-3xl" />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Sidebar (right side) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[8%] bg-gradient-to-b from-slate-500 to-slate-700  text-[#64748b] flex flex-col justify-between items-center py-10 shadow-lg z-50"
          >
            {/* Close Icon */}
            <div
              className="absolute top-5 left-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <BiX className="text-3xl text-[#FEEBDD]" />
            </div>

            {/* Sidebar content */}
            <div className="flex flex-col space-y-6 mt-10 text-[#FEEBDD]">
              <Link to='home' smooth={true} duration={700} className="hover:text-primary font-bold cursor-pointer">Home</Link>
              <Link to='services' smooth={true} duration={700} className="hover:text-primary font-bold cursor-pointer">Services</Link>
              <Link to='order' smooth={true} duration={700} className="hover:text-primary font-bold cursor-pointer">Order</Link>
              <Link to='about' smooth={true} duration={700} className="hover:text-primary font-bold cursor-pointer">About</Link>
              <Link to='footer' smooth={true} duration={700} className="hover:text-primary font-bold cursor-pointer">Footer</Link>
            </div>

            {/* Social icons */}
            <div className="flex flex-col space-y-6 mb-10 text-[#FEEBDD]">
              <FaFacebook className="text-2xl cursor-pointer hover:text-primary font-bold" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-primary font-bold" />
              <FaGithub className="text-2xl cursor-pointer hover:text-primary font-bold" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-primary font-bold" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

