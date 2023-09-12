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
      className={`bg-gray-900 text-white py-12 px-4 ${isVisible ? 'slide-up active' : 'slide-up'}`}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Tokenomics</h2>
        <ul className="list-none p-0">
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-white w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Total Supply:</p>
                <p>Set the total quantity of GiggleGameGem tokens in existence. This decision establishes rarity and can influence the token's long-term value.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-white w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Initial Distribution:</p>
                <p>Distribute an initial portion of GiggleGameGem tokens among various stakeholders, including founders, developers, investors, advisors, and community members.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-white w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Utility:</p>
                <p>Specify the role of GiggleGameGem within its ecosystem. It might serve as a means to access specific services, products, or features within a platform, driving demand through its utility.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-white w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Staking and Rewards:</p>
                <p>Incorporate staking mechanisms where holders can "lock up" their tokens for a defined period to earn rewards. This encourages prolonged holding and reduces the circulating supply.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-white w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Governance:</p>
                <p>Introduce a governance framework that empowers token holders to participate in decision-making processes. This can involve voting on proposals related to network upgrades, changes, or ecosystem development.</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="flex items-start">
              <span className="bg-white w-4 h-4 rounded-full flex-shrink-0 mt-1"></span>
              <div className="ml-2">
                <p className="font-bold">Transaction Fees:</p>
                <p>Determine whether GiggleGameGem will be used to settle transaction fees within the ecosystem, creating a consistent demand for the token as users engage with the platform.</p>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
