import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-dark-gray p-6">
      <div className="flex items-center justify-center space-x-2">
        <div>
          <Image src={'/svg/Logo.svg'} alt="logo" width={30} height={30} />
        </div>
        <span className="font-ibm text-2xl text-center text-white">PLAYRR</span>
      </div>
    </div>
  );
};

export default Footer;
