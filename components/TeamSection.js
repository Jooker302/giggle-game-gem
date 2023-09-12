import React, { useEffect, useState } from 'react';

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const teamSection = document.getElementById('team-section');

    if (teamSection) {
      const rect = teamSection.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const teamMembers = [
    {
      name: 'DxSale',
      image: '/dxsale.png',
      link: 'https://dx.app/', // Replace with actual image path
    },
    {
      name: 'BNB Chain',
      image: 'https://th.bing.com/th/id/OIP.1wTTp6-XPR-g6PS8D8ZAqAHaDt?pid=ImgDet&rs=1',
      link: '', // Replace with actual image path
    },
    {
        name: 'Coinbase',
        image: 'https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBiN6eiA/d4acc5d4c5d557566cf0e46f9b58de43/icon-buy-and-sell.svg', // Replace with actual image path
        link: '',
      },
      {
        name: 'Chain Link',
        image: 'https://th.bing.com/th/id/OIP.mleb5_jAlRxR3Yj8Zksc2gHaHa?pid=ImgDet&rs=1', // Replace with actual image path
        link: '',
      },
      {
        name: '1inch',
        image: 'https://th.bing.com/th/id/R.95bf06d513ed7ae2ea7ee2457a8daf91?rik=IfsTHJ7lZxWswQ&pid=ImgRaw&r=0', // Replace with actual image path
        link: '',
      },
      {
        name: 'ARB',
        image: 'https://pbs.twimg.com/profile_images/1653532864309239810/ZjT_zBAS_400x400.png', // Replace with actual image path
        link: '',
      },
    // Add more team members
  ];

  return (
    <section
      id="team-section"
      className={`bg-white py-12 ${isVisible ? 'slide-up active' : 'slide-up'}`}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <a href={member.link} key={index}>
            <div  className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg mb-2"
              />
              <p className="text-gray-800 font-semibold">{member.name}</p>
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
