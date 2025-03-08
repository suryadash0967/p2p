import Image from "next/image";

export default function ZkKYC() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between items-center xl:px-[200px] lg:px-[126px] px-[32px] lg:mt-[117px] mt-[94px]">
      {/* Image */}
      <Image 
        src="/card.webp" 
        alt="Zk-KYC Card" 
        width={416} 
        height={416} 
        className="xl:h-[416px] lg:h-[346px] h-[250px] mt-[74px] lg:mt-[0px] object-contain"
      />

      {/* Text Content */}
      <div className="xl:w-[546px] lg:w-[437px] w-[301px]">
        <p className="text-primary lg:text-[32px] text-[24px]">Zk-KYC on P2P.me is Non-Custodial</p>
        <p className="text-white lg:text-[19px] text-[14px] lg:mt-[32px] mt-[20px]">
          On P2P.me, KYC is done using Zk-Proofs and this completely guards user privacy. 
          As a fully decentralized platform built, owned, and operated by the community, 
          KYC norms on P2P are governed by its users and not any centralized agency or one individual.
        </p>
      </div>
    </div>
  );
}
