import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
import WhereToBuy from "./Components/WhereToBuy";
import Download from "./Components/Download";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";

const App = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <Cards />
      <WhereToBuy />
      <Download />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default App;
