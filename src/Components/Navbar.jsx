import React, { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

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
            className="text-3xl font-black uppercase cursor-pointer font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <b className="text-primary">Caffine</b> Cove
          </motion.h1>

          {/* Menu Icon */}
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

      {/* Sidebar + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-[85%] w-[80%] sm:w-[40%] bg-gradient-to-b from-slate-600 to-slate-800 text-[#FEEBDD] flex flex-col justify-between items-center py-10 shadow-2xl rounded-l-2xl backdrop-blur-md z-50"
            >
              {/* Close Icon */}
              <div
                className="absolute top-5 left-5 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <BiX className="text-3xl text-[#FEEBDD]" />
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-6 mt-10 text-[#FEEBDD] font-inter">
                {["home", "services", "order", "about", "footer"].map((item, i) => (
                  <Link
                    key={i}
                    to={item}
                    smooth
                    duration={700}
                    className="hover:text-primary font-bold cursor-pointer transition-transform hover:scale-110"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex flex-row gap-6 mb-10 text-[#FEEBDD]">
                {[FaFacebook, FaTwitter, FaGithub, FaInstagram].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="text-2xl cursor-pointer hover:text-primary hover:scale-125 transition-transform"
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;