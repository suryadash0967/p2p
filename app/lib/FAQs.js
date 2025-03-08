import Image from 'next/image';
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:mx-[96px] mx-[32px] mt-[50px] lg:mt-[177px] pb-[140px]">
      <p className="text-white lg:text-[40px] text-[22px] text-center">FAQs</p>
      <div className="mt-[44px] lg:mt-[89px]">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              className={`flex justify-between border-primary py-[19px] items-center hover:cursor-pointer faq-accordian ${
                // Add border bottom only if the answer is closed AND it's not the last FAQ item
                openIndex !== index && index !== faqs.length - 1 ? 'border-b-[0.5px]' : ''
                }`}
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-white lg:text-[19px] text-[14px]">{faq.question}</p>
              <div
                id={`id-faq-btn-${index}`}
                className={`rounded-[8px] ${openIndex === index ? 'bg-primary/10' : ''}`}
              >
                <Image src="/plus-square.svg" alt="toggle" height={33} width={33} />
              </div>
            </div>
            <div
              id={`id-faq-accordian-ans-${index}`}
              className={`bg-faq-card-gradient lg:py-[27px] py-[14px] lg:px-[36px] px-[16px] border-[0.5px] rounded-[12px] border-primary/50 ${openIndex === index ? '' : 'hidden'
                }`}
            >
              <p className="text-white">
                {faq.answer.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqs = [
  {
    question: `How does P2P.me address the 'bank account freeze' issue?`,
    answer: `Fraudsters exploit peer-to-peer (P2P) transactions by purchasing USDC (USD Coin) from legitimate members using fraudulent Indian Rupees (INR). As a result, the seller unknowingly receives fraudulent INR into their bank account. When authorities trace the money trail to recover the illicit funds, they often freeze the legitimate seller's bank account without identifying the actual fraudster. This issue is a well-known problem within P2P communities.\n\nP2P.me addresses this problem by implementing a Reputation Points (RP) system to set transaction limits for users. New users start with a $0 transaction limit, preventing them from participating in P2P transactions unless they submit zero-knowledge KYC (Zk-KYC) verification or are recommended by another community member who has at least 200 RP. If an existing member recommends a fraudster to the community and fraud is subsequently reported, both the fraudster's and the recommending member's RP will be reduced. This mechanism discourages members from endorsing untrustworthy individuals and helps maintain the integrity of the community.`,
  },
  {
    question: `What is RP (Reputation Points) on P2P.me?`,
    answer: `Reputation Points (RP) are a trust metric on P2P.me that prevent fraud by setting transaction limits based on your RP. Higher RP allows you to buy or sell more USDC (USD Coin) on the platform.\n\nHow to Increase Your Transaction Limits:\n\nRecommendations from Trusted Members:\n• Earn 50 RP per Recommendation: Get recommended by members with over 200 RP.\n• Multiple Recommendations: Each additional recommendation adds another 50 RP.\n\nZero-Knowledge KYC (ZK-KYC):\n• Earn 300 RP and a $10 Reward: Submit a zero-knowledge proof of your Aadhaar card.\n• Note: Your ZK-KYC information will be accessible to the Indian government.\n\nTransaction Milestones:\n• After 5 Transactions: Earn an additional 75 RP.\n• After 25 Transactions: Earn another 75 RP.\n\nCalculation: Your transaction limit is half of your total RP.`,
  },
  {
    question: `How many transactions can I do?`,
    answer: `A P2P.me user can:\n\n• Place 3 Buy USDC orders per day (maximum of 15 completed Buy orders per month).\n• Place 10 Sell USDC orders per day (no monthly limit).`,
  },
  {
    question: `What Are the Preferred Timings to Use P2P.me?`,
    answer: `Orders on P2P.me are assigned to merchants only when they are available to fulfill them. Based on our historical data, merchants are most active between 9 AM and 9 PM. Therefore, it is highly recommended to place your orders during these hours for quicker processing.\n\nWhile some merchants may be available at night, placing orders during daytime increases the likelihood of immediate fulfillment. Submitting your requests during peak activity times ensures a smoother and faster transaction experience.`,
  },
  {
    question: `Will P2P.me Deduct Taxes from Your Transactions?`,
    answer: `No, P2P.me does not deduct any taxes from your transactions. As a decentralized protocol that connects users with merchants without holding any user funds, P2P.me is unable to withhold taxes on your behalf.\n\nYou are responsible for ensuring compliance with the tax laws in your local jurisdiction. P2P.me provides you with detailed transaction history data to assist you in fulfilling any tax obligations. Please consult a tax professional if you have questions about reporting your transactions.`,
  },
  {
    question: `Is KYC Required?`,
    answer: `No, P2P.me does not require KYC for transactions. However, by submitting your KYC zero-knowledge proof (Zk-proof), you can access higher transaction limits.`,
  },
  {
    question: `Who is building the P2P.me protocol?`,
    answer: `P2P.me is a public goods protocol on the Base Layer 2 network, developed by a diverse cohort of developers from around the world.`,
  },
  {
    question: `Is P2P.me compliant with FATF guidelines to prevent money laundering?`,
    answer: `Yes, P2P.me is designed to comply with the guidelines of FATF (Financial Action Task Force) the global watchdog for money laundering and countering terrorist financing, upon which local jurisdictions frame their money laundering-related laws.\n\nThe use of ZK-KYC and lower transaction limits on P2P.me ensures that users cannot misuse the protocol for money laundering. The protocol is tailored for micro-transactions, supporting the broader goal of enabling consumer crypto adoption.`,
  },
  {
    question: `Are merchants on P2P.me verified?`,
    answer: `P2P.me operates as a permissionless protocol, allowing anyone to stake USDC and provide liquidity to become a merchant. However, merchants are required to submit ZK-proofs to verify that they hold a valid bank account.`,
  },
  {
    question: `Will P2P.me assist users with legal compliance?`,
    answer: `P2P.me is a community-driven protocol, where community members assist each other with legal compliance matters, including issues such as unfreezing bank accounts. To get support, users are encouraged to join the P2P.me community channels for help and guidance.`,
  },
];


export default FAQ;