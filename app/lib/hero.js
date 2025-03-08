import Image from "next/image";

export default function Hero() {
  const logAmplitudeEvent = (eventName) => {
    try {
      amplitude.getInstance().logEvent(eventName);
    } catch (err) {
      console.error("Failed to log Amplitude event:", eventName, err);
    }
  };

  return (
    <div className="lg:mt-[160px] mt-[120px]">
      <div className="right-0 left-0 top-0 xl:px-[200px] lg:px-[126px] px-[32px]">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:mb-[100px]">
            <div>
              <p className="heading-anim text-[#FFFFFFB3] lg:text-[14px] text-[12px] text-center lg:text-start uppercase">
                Fully On-chain
              </p>
              <p className="heading-anim2 text-white xl:text-[36px] lg:text-[32px] text-[32px] text-center lg:text-start">
                <span className="uppercase text-primary text-[40px]">
                  FIAT<span className="xl:text-[52px] lg:text-[40px] text-[36px] text-primary">/</span>USDC
                </span>
                &nbsp;Swaps
              </p>
              <p className="heading-anim3 text-white text-[18px] text-center lg:text-start italic">
                Your Keys, Your Crypto!
              </p>
            </div>

            <div className="lg:mt-[40px] mt-[24px] flex flex-col items-center lg:items-start">
              <a
                href="https://app.p2p.me"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logAmplitudeEvent("LAUNCH_APP")}
              >
                <div className="fade-in bg-gradient-to-r from-blue-500 to-teal-500 lg:h-[62px] h-[44px] lg:w-[234px] w-[164px] flex justify-center items-center lg:rounded-[12px] rounded-[8px] hover:cursor-pointer">
                  <p className="text-black">Launch App</p>
                  <Image
                    src="/arrow-right.svg"
                    alt="Arrow Right"
                    width={30}
                    height={25}
                    className="ml-[12px]"
                  />
                </div>
              </a>

              <div className="flex row items-center lg:mt-[24px] mt-[16px]">
                <Image src="/reclaim.svg" alt="Reclaim Icon" width={16} height={18} />
                <p className="text-white ml-2">
                  Zk proofs powered by{" "}
                  <a
                    href="https://www.reclaimprotocol.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                    onClick={() => logAmplitudeEvent("RECLAIM_LINK_CLICK")}
                  >
                    Reclaim
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/app_in_mobile_4x.webp"
              alt="App in Mobile"
              width={600}
              height={600}
              className="slide-in visible xl:max-h-[600px] lg:max-h-[475px] max-h-[600px] object-contain lg:mt-[0px] mt-[60px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
