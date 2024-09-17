import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => {
  // Determine if the link is external

  return (
    <div className="flex flex-col h-full justify-end">
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
