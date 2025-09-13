import React from "react";
import { motion } from "framer-motion";
import bg_img from "../assets/bg_img.png";

const Download = () => {
  return (
  <div id='about'>
    <div
      className="h-[500px] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <motion.div
        className="w-full max-w-[800px] flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 80 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-5xl font-bold py-5 text-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Download Our App
        </motion.h2>

        <motion.p
          className="text-lg text-gray-800 max-w-[600px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Get the best experience by downloading our app.  
          Stay connected anywhere, anytime with lightning-fast performance.  
          Enjoy exclusive features designed to make your life easier and smarter.  
          Secure, reliable, and updated regularly for the best user experience.
        </motion.p>

        <motion.button
          className="mt-6 px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/80 transition w-[200px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Download
        </motion.button>
      </motion.div>
    </div>
  </div>
  );
};

export default Download;
