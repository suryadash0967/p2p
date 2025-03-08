import Image from "next/image";

export default function GasLess() {
  return (
    <div className="h-[432px] lg:bg-card-two-gradient rounded-[24px] lg:mx-[96px] mx-[32px] lg:mt-[148px] mt-[98px] flex justify-between lg:flex-row flex-col items-center px-[55px]">
      {/* Text Content */}
      <div className="xl:w-[546px] lg:w-[437px] w-[301px]">
        <p className="text-primary lg:text-[32px] text-[24px]">Gas Less, using Account Abstraction.</p>
        <p className="text-white lg:text-[19px] text-[14px] lg:mt-[32px] mt-[20px]">
          All gas fees are sponsored in perpetuity by the P2P.me DAO.
          P2P.me app uses account abstraction to fund gas costs incurred by the user.
        </p>
      </div>

      {/* Image */}
      <Image 
        src="/app-merchant.webp" 
        alt="App Merchant" 
        width={511} 
        height={511} 
        className="xl:h-[511px] lg:h-[470px] h-[300px] mt-[60px] lg:mt-[0px] object-contain"
      />
    </div>
  );
}
