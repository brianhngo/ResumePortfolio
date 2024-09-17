import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer w-full border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-center text-white mx-auto flex flex-col">
      <div className="container p-12 flex justify-center items-center">
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
