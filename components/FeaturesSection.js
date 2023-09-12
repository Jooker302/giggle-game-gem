import React, { useEffect, useState, useRef } from 'react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const featuresSectionTop = featuresRef.current.getBoundingClientRect().top;

    if (scrollY > featuresSectionTop + 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false); // Set back to false when scrolling up
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={featuresRef}
      className={`bg-gray-100 py-12 px-4 ${isVisible ? 'slide-up active' : 'slide-up'}`}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tokenomics</h2>
        <ul className="list-none p-0">
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-black w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Total Supply:</p>
                <p>Decide on the total number of Lorex tokens that will ever exist. This establishes scarcity and can influence the token's value over time.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-black w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Initial Distribution:</p>
                <p>Allocate an initial portion of Lorex tokens to various stakeholders, which might include founders, developers, investors, advisors, and community members.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-black w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Utility:</p>
                <p>Define the purpose of Lorex within its ecosystem. It could be used for accessing specific services, products, or features within a platform. Clear utility helps drive demand.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-black w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Staking and Rewards:</p>
                <p>Implement staking mechanisms where holders can "lock up" their tokens for a certain period to earn rewards. This incentivizes long-term holding and reduces circulating supply.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-black w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Governance:</p>
                <p>Introduce a governance model that enables token holders to participate in decision-making processes. This could involve voting on proposals related to network upgrades, changes, or ecosystem developments.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-black w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Transaction Fees:</p>
                <p>Determine if Lorex will be used to pay transaction fees within the ecosystem. This creates a constant demand for the token as users engage with the platform.</p>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
