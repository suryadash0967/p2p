import Image from "next/image";

export default function Card() {
  return (
    <div className="flex justify-between lg:flex-row flex-col xl:px-[200px] lg:px-[126px] px-[32px] mt-[135px] items-center">
      
      {/* Card 1 */}
      <div className="bg-card-border-gradient xl:h-[463px] lg:h-[443px] xl:w-[320px] lg:w-[275px] w-[300px] p-[1px] rounded-[24px] mb-[28px] lg:mb-[0px]">
        <div className="bg-[#0D0D0D] h-full rounded-[24px]">
          <div className="bg-card-gradient h-full rounded-[24px] xl:p-[44px] lg:p-[32px] p-[32px]">
            <div className="flex flex-row justify-center">
              <Image src="/fast.webp" alt="Blazing Fast" width={131} height={100} className="xl:h-[131px] lg:h-[100px] h-[100px] mb-[61px] object-contain" />
            </div>
            <p className="text-white text-[20px] mb-[20px]">Blazing Fast P2P</p>
            <p className="text-white text-[14px]">
              Liquidity on P2P.me is facilitated by active peers located around the world.
              Settlements are seamless and Blazing-fast.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-card-border-gradient xl:h-[463px] lg:h-[443px] xl:w-[320px] lg:w-[275px] w-[300px] p-[1px] rounded-[24px] mb-[28px] lg:mb-[0px]">
        <div className="bg-[#0D0D0D] h-full rounded-[24px]">
          <div className="bg-card-gradient h-full rounded-[24px] xl:p-[44px] lg:p-[32px] p-[32px]">
            <div className="flex flex-row justify-center">
              <Image src="/desc.webp" alt="Fully On-chain" width={131} height={100} className="xl:h-[131px] lg:h-[100px] h-[100px] mb-[61px] object-contain" />
            </div>
            <p className="text-white text-[20px] mb-[20px]">Fully On-chain</p>
            <p className="text-white text-[14px]">
              P2P.me is built with smart contracts that are governed by the P2P.me DAO. We are the world's first decentralized alternative to centralized P2P exchanges.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-card-border-gradient xl:h-[463px] lg:h-[443px] xl:w-[320px] lg:w-[275px] w-[300px] p-[1px] rounded-[24px] mb-[28px] lg:mb-[0px]">
        <div className="bg-[#0D0D0D] h-full rounded-[24px]">
          <div className="bg-card-gradient h-full rounded-[24px] xl:p-[44px] lg:p-[32px] p-[32px]">
            <div className="flex flex-row justify-center">
              <Image src="/secure.webp" alt="Secure & Reliable" width={131} height={100} className="xl:h-[131px] lg:h-[100px] h-[100px] mb-[61px] object-contain" />
            </div>
            <p className="text-white text-[20px] mb-[20px]">Secure & Reliable</p>
            <p className="text-white text-[14px]">
              To combat P2P fraud, our on-chain reputation system sets transaction limits based on user trust, powered by zk-KYC. It analyzes social graphs and transaction histories to block fraudsters and protect users' bank accounts.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
