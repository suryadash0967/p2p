'use client';

import FAQSection from "./lib/FAQs";
import Card from "./lib/card";
import GasLess from "./lib/GasLess";
import Hero from "./lib/hero";
import Navbar from "./lib/navbar";
import SocialLinks from "./lib/SocialLinks";
import Wyp2p from "./lib/wyp2p"
import ZkKYC from "./lib/ZkKYC";
import Footer from "./lib/footer";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>
      <Hero/>
      <Wyp2p/>
      <Card/>
      <ZkKYC/>
      <GasLess/>
      <SocialLinks/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
