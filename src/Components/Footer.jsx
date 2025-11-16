import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-[#FEEBDD] w-full mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 place-items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Col-1 */}
          <motion.div
            className="py-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-bold text-3xl text-primary font-poppins">Coders Cafe</h3>
            <p className="text-sm opacity-55 my-8 font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center font-inter">
              <BiPhoneCall /><p className="ml-2">+1234567890</p>
            </div>
            <div className="flex items-center mt-2 font-inter">
              <BiLocationPlus /><p className="ml-2">123 Main St, Anytown, Islamabad</p>
            </div>
          </motion.div>

          {/* Col-2 */}
          <motion.div
            className="py-10 px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-bold text-3xl text-primary font-poppins">Links</h3>
            <ul className="my-5 font-inter">
              {["Home", "About", "Services", "Contact", "Privacy Policy"].map((link, i) => (
                <li key={i} className="py-1 text-sm opacity-55 cursor-pointer hover:opacity-100 transition">{link}</li>
              ))}
            </ul>
          </motion.div>

          {/* Col-3 */}
          <motion.div
            className="py-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="font-bold text-3xl text-primary font-poppins">Follow Us</h3>
            <div className="flex flex-row justify-center gap-4 mt-4">
              {[FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <Icon key={i} size={24} className="opacity-55 hover:opacity-100 hover:scale-110 transition cursor-pointer" />
              ))}
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold text-primary mb-3 font-poppins">We Accept</h1>
              <div className="flex justify-center gap-4">
                {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex, FaCcDiscover].map((Icon, i) => (
                  <Icon key={i} size={28} className="text-white opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;