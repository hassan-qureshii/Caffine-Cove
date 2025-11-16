import { motion } from "framer-motion";
import coffee from "../assets/coffee.png";

const Hero = () => {
  return (
    <div id="home">
      <div className="relative w-full min-h-[610px] flex items-center justify-center px-4 py-4 md:px-7 bg-gradient-to-r from-slate-800 to-slate-700 font-sans overflow-hidden">
        {/* Background Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5 }}
          className="uppercase font-extrabold font-poppins text-6xl md:text-9xl text-slate-900 absolute lg:top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none"
        >
          Caffine Cove
        </motion.div>

        {/* Centered Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 max-w-[1200px] mx-auto">
          {/* Left Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-4"
          >
            <h1 className="text-5xl font-black text-[#EFE9DD] lg:mb-20 md:mb-10 lg:text-7xl font-poppins">
              Black Cup
            </h1>
            <div className="text-[#FEEBDD] font-inter">
              <h3 className="text-2xl font-black py-4">A rich and bold coffee blend.</h3>
              <p className="text-sm opacity-55 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </motion.div>

          {/* Coffee Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative flex justify-center"
          >
            <motion.img
              src={coffee}
              alt="coffee-img"
              className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] drop-shadow-2xl"
              whileHover={{ rotate: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:mt-20 text-[#FEEBDD] px-4 font-inter"
          >
            <h1 className="text-2xl font-black">The Design</h1>
            <p className="text-sm opacity-55 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;