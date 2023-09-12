'use client';
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faTelegram } from '@fortawesome/free-brands-svg-icons';
import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';
import Loader from '@/components/Loader';

export default function Home() {

 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);



    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const aboutSection = document.getElementById('about-section');

    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);


if (isLoading) {
  return <Loader />;
}

  return (
    <>
    
    <header className="bg-gray-800 text-white p-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </div>
          <div className="text-xl font-bold">
            <img src='/main.jpeg' className='h-12 w-12 rounded-full ' />
          </div>
        </div>
        <div className="flex space-x-4">
        <a className="m-2" href=""><FontAwesomeIcon icon={faXTwitter} className='text-white hover:text-[#264F51]' size="lg" style={{ width: '24px', height: '24px' }} /></a>
        <a className="m-2" href=""><FontAwesomeIcon className='text-white hover:text-[#264F51]' icon={faTelegram} size="lg" style={{ width: '24px', height: '24px' }} /></a>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 bg-gray-800 p-4">
          <ul className="list-none">
            <li className="mb-2">
              <a href="#intro" className="text-white hover:text-[#264F51]">Home</a>
            </li>
            <li className="mb-2">
              <a href="#about-section" className="text-white hover:text-[#264F51]">About</a>
            </li>
            <li className='mb-2'>
              <a href="#team-section" className="text-white hover:text-[#264F51]">Team</a>
            </li>
            <li>
              <a href="" className="text-white hover:text-[#264F51]">Telegram</a>
            </li>
          </ul>
        </nav>
      )}
    </header>



    <section id='intro' className="bg-gray-900 md:py-12">
  <div className="container mx-auto flex flex-col items-center">
    <img src="/cover.jpeg" alt="Banner" className="w-full max-w-lg mb-6 md:max-w-xl lg:max-w-2xl md:w-2/3 md:rounded-lg shadow-lg" />
    <h2 className="text-2xl font-bold text-gray-100 mb-4">Welcome to the realm of GiggleGameGem</h2>
    <p className="text-gray-100 text-lg text-center">Where crypto meets laughter and innovation meets accessibility. 🌐😂💎</p>
  </div>
</section>



<section
      id="about-section"
      className={`bg-gray-900 py-12 px-4 md:px-0 ${isVisible ? 'slide-in active' : 'slide-in'}`}
    >
  <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
    <div className="md:w-1/2 mb-6 md:mb-0 md:px-4">
      <img src="/main.jpeg" alt="About" className="w-full rounded-full shadow-lg md:ml-44 md:w-72 md:max-w-full" />
    </div>
    <div className="md:w-1/2 md:pl-4">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">About GiggleGameGem</h2>
      <p className="text-gray-100"> "GiggleGameGem: Where laughter mingles with crypto magic! Embark on a whimsical journey into the world of gaming and memes with our unique token. Earn, play, and meme your way to the ultimate Gigglegame treasure. Join the fun, and let the gems roll in!" 😂🎮💎</p>
    </div>
  </div>
</section>


<FeaturesSection/>
<TeamSection/>




<footer className="bg-gray-800 py-4 text-center font-bold text-white">
      <p>Listed on Binance Smart Chain</p>
    </footer>




    </>
  )
}
