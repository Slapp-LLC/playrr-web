import Image from 'next/image';
import React from 'react';
import logo from '../../public/svg/Logo.svg';
const Navbar = () => {
  return (
    <div className="w-full  bg-black p-4">
      <div className="flex items-center">
        <Image width={28} height={35} src={'svg/Logo.svg'} alt="logo" />
        <span className="text-white ml-3 font-ibm text-3xl">PLAYRR</span>
      </div>
    </div>
  );
};

export default Navbar;
