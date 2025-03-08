'use client';

import { useEffect } from "react";
import Image from "next/image";

import logo from "../../public/p2p.svg";
import hamburgerIcon from "../../public/hamburger-menu.svg";
import mediumIcon from "../../public/medium.svg";
import twitterIcon from "../../public/twitter.svg";
import telegramIcon from "../../public/telegram-ic.svg";

export default function Navbar() {
  useEffect(() => {
    function logAmplitudeEvent(eventName) {
      try {
        // Ensure amplitude is available
        if (typeof amplitude !== "undefined") {
          amplitude.getInstance().logEvent(eventName);
        }
      } catch (err) {
        console.error("Failed to log Amplitude event:", eventName, err);
      }
    }

    const mobileMenu = document.getElementById("id-mobile-hamburger");
    const mobileNav = document.getElementById("id-mobile-nav-icon");

    // Toggle visibility of mobile menu when the hamburger icon is clicked
    if (mobileMenu) {
      mobileMenu.addEventListener("click", () => {
        logAmplitudeEvent("MOBILE_MENU_CLICK");

        mobileMenu.classList.toggle("bg-primary/10");
        mobileNav?.classList.toggle("hidden"); // Toggle the visibility of the mobile menu
      });
    }

    console.info("www.p2p.me running like a charm 🚀");

    return () => {
      if (mobileMenu) mobileMenu.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="nav_container xl:px-[200px] lg:px-[126px] px-[32px] lg:h-[87px] h-[64px] lg:rounded-b-[87px] fixed top-0 right-0 left-0 z-10">
      <div className="flex justify-between items-center h-full lg:mx-[42px]">
        <Image src={logo} alt="P2P Logo" className="lg:w-[124px] lg:h-[31px] w-[89px] h-[22px] cursor-pointer" />

        <div className="relative lg:hidden block">
          <div id="id-mobile-hamburger" className="cursor-pointer rounded-[8px] p-[8px]">
            <Image src={hamburgerIcon} alt="Menu" className="cursor-pointer" />
          </div>

          <div id="id-mobile-nav-icon" className="absolute border-[0.5px] top-[42px] border-primary/20 rounded-[3px] bg-[#192935E0] hidden">
            <a href="https://medium.com/@p2pdotme" target="_blank">
              <div className="cursor-pointer hover:bg-primary/10 p-[12px]">
                <Image src={mediumIcon} alt="Medium" className="h-[12px] w-[12px]" />
              </div>
            </a>
            <div className="h-[0.5px] w-full bg-primary/50"></div>
            <a href="https://x.com/P2Pdotme" target="_blank">
              <div className="cursor-pointer hover:bg-primary/10 p-[12px]">
                <Image src={twitterIcon} alt="Twitter" className="h-[12px] w-[12px]" />
              </div>
            </a>
            <div className="h-[0.5px] w-full bg-primary/50"></div>
            <a href="https://t.me/P2Pdotme" target="_blank">
              <div className="cursor-pointer hover:bg-primary/10 p-[12px]">
                <Image src={telegramIcon} alt="Telegram" />
              </div>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between w-[195px] hidden lg:flex">
          <a href="https://medium.com/@p2pdotme" target="_blank">
            <div className="cursor-pointer hover:bg-primary/10 hover:rounded-[8px] p-[12px]">
              <Image src={mediumIcon} alt="Medium" />
            </div>
          </a>
          <a href="https://x.com/P2Pdotme" target="_blank">
            <div className="cursor-pointer hover:bg-primary/10 hover:rounded-[8px] p-[12px]">
              <Image src={twitterIcon} alt="Twitter" />
            </div>
          </a>
          <a href="https://t.me/P2Pdotme" target="_blank">
            <div className="cursor-pointer hover:bg-primary/10 hover:rounded-[8px] p-[12px]">
              <Image src={telegramIcon} alt="Telegram" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
