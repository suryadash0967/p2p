import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="lg:mx-[96px] mx-[32px]">
      <div className="flex justify-evenly items-center mt-[130px]">
        <Image 
          src="/p2p.svg" 
          alt="P2P Icon" 
          width={115} 
          height={115} 
          className="h-[28px] lg:h-[52px]"
        />

        <div className="h-[60px] w-[1px] bg-primary/50 lg:block hidden"></div>

        <a
          href="https://t.me/P2Pdotme"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => logAmplitudeEvent("CLICK_TELEGRAM_ICON")}
        >
          <Image 
            src="/telegram.svg" 
            alt="Telegram" 
            width={37} 
            height={37} 
            className="h-[28px] lg:h-[47px]"
          />
        </a>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="h-[1px] w-full bg-primary/30 lg:hidden block mt-[52px]"></div>
      </div>
    </div>
  );
}
