import { motion } from "framer-motion";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import Map from "../assets/Map.png";

const WhereToBuy = () => {
  return (
  <div id='order'>
    <div className=" bg-gradient-to-r from-slate-800 to-slate-700 text-[#FEEBDD]">
      {/* Header */}
      <div className="max-w-[1024px] mx-auto py-12 px-4">
        <h1 className="text-4xl font-sans font-black text-primary text-center">
          Where To Buy
        </h1>
        <p className="text-center text-amber-50 text-xl max-w-2xl mx-auto mt-4">
          Find our products at these locations
        </p>
      </div>

      {/* Content Grid */}
      <div className="w-full max-w-[1024px] mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}   // 👈 reset when leaving
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-4 w-full"
          >
            {/* Name */}
            <div className="flex items-center border rounded-md p-2 w-[250px]">
              <FaUser className="text-amber-50 mr-2" />
              <input
                type="text"
                placeholder="Name"
                className="outline-none flex-1 "
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-md p-2 w-[300px]">
              <MdEmail className="text-amber-50 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="outline-none flex-1 "
              />
            </div>

            {/* Location */}
            <div className="flex items-center border rounded-md p-2 w-[350px]">
              <FaMapMarkerAlt className="text-amber-50 mr-2" />
              <input
                type="text"
                placeholder="Location"  
                className="outline-none flex-1 "
              />
            </div>

            {/* Zip Code */}
            <div className="flex items-center border rounded-md p-2 w-[400px]">
              <FaRegAddressCard className="text-amber-50 mr-2" />
              <input
                type="number"
                placeholder="Zip Code"
                className="outline-none flex-1 "
              />
            </div>

            {/* Button */}
            <button className="w-full border-0 bg-primary text-amber-50 rounded-xl py-3 hover:bg-blue-900 hover:scale-105 duration-500">
              Order Now
            </button>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}   // 👈 reset when leaving
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full"
          >
            <img
              src={Map}
              alt="Map"
              className="w-full h-[300px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default WhereToBuy;

