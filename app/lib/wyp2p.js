import Image from "next/image";

export default function Wyp2p() {
  const logAmplitudeEvent = (eventName) => {
    try {
      amplitude.getInstance().logEvent(eventName);
    } catch (err) {
      console.error("Failed to log Amplitude event:", eventName, err);
    }
  };

  return (
    <div className="xl:px-[200px] lg:px-[126px] px-[32px]">
      <p className="text-white text-[32px] text-center">
        <span className="why-text">Why</span> P2P.me?
      </p>
      <p className="text-white text-center">Self custodial, Secure and Superfast</p>

      <div className="flex flex-row justify-center mt-[38px]">
        <div className="bg-button-border-gradient rounded-[12px]">
          <div className="bg-[#0D0D0D] m-[0.5px] rounded-[12px]">
            <a
              href="https://p2p-me.gitbook.io/p2p.me-docs/getting-started/quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
              onClick={() => logAmplitudeEvent('READ_DOCS')}
            >
              <div className="w-[220px] h-[59px] bg-button-glass-gradient rounded-[12px] flex flex-col justify-center items-center">
                <Image src="/docs.svg" alt="Docs Icon" width={24} height={24} />
                <p className="text-white text-center">Read Docs</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
