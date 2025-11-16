import React from "react";
import { motion } from "framer-motion";
import Black_coffee from "../assets/Black_coffee.png";
import Chocolate from "../assets/Chocolate.png";
import Cold_coffee from "../assets/Cold_coffee.png";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2 },
  }),
};

const Cards = () => {
  return (
    <div id="services">
      <div className="w-full bg-[#EFE9DD]">
        {/* Section Header */}
        <div className="max-w-[1024px] mx-auto py-12 px-4">
          <h1 className="text-4xl font-poppins font-black text-primary text-center">
            Fresh And <b className="text-slate-700">Tasty</b>
          </h1>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mt-4 font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit aliqua.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-[1024px] mx-auto py-12 overflow-hidden"
        >
          <div className="grid md:grid-cols-3 place-items-center gap-8 px-4">
            {[
              { img: Black_coffee, title: "Black Coffee" },
              { img: Chocolate, title: "Hot Chocolate Coffee" },
              { img: Cold_coffee, title: "Cold Coffee" },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                custom={i}
                className="text-center bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform"
              >
                <img
                  className="h-[300px] mx-auto object-contain"
                  src={card.img}
                  alt={card.title}
                />
                <h1 className="font-poppins font-black text-2xl py-3">
                  {card.title}
                </h1>
                <p className="text-slate-700 text-sm font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;