import React from 'react';

const Footer = () => {
  const handleTCLinkClick = (event) => {
    event.preventDefault();
    logAmplitudeEvent('TC_VIEW'); // Log Amplitude event
    document.getElementById('tc-modal').classList.remove('hidden'); // Show terms and conditions modal
  };

  const logAmplitudeEvent = (eventName) => {
    try {
      amplitude.getInstance().logEvent(eventName);
    } catch (err) {
      console.error("Failed to log Amplitude event:", eventName, err);
    }
  };

  return (
    <footer className="footer_container text-white xl:px-[200px] lg:px-[126px] px-[32px] lg:h-[87px] h-auto lg:rounded-t-[87px] flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left space-y-2 lg:space-y-0">
      <div>
        <p className="text-white lg:text-[16px] text-[14px] mb-1">
          For any legal inquiries, please feel free to contact us at:
        </p>
        <a
          href="mailto:compliance@p2p.me"
          className="text-[#62C1EF] hover:underline lg:text-[19px] text-[16px]"
        >
          compliance@p2p.me
        </a>
      </div>
      <div className="pb-5">
        <a
          href="#"
          id="tc-link"
          className="text-[#62C1EF] hover:underline lg:text-[16px] text-[14px]"
          onClick={handleTCLinkClick}
        >
          Terms &amp; Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;