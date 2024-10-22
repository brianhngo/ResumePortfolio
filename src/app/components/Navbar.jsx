'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={'/'}
          className="text-2xl md:text-5xl text-white font-semibold">
          <Image src="/logo1.png" alt="Website Logo" height={50} width={150} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <div className="flex flex-col h-full justify-end">
              <a
                href="https://drive.google.com/file/d/1BALlKjg_G7CZgzjGrd5GZYdHtiK50j1a/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="block py-2 p-0 m-0 text-[#ADB7BE] sm:text-xl rounded md:p-0  hover:bg-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="48px"
                  height="48px"
                  viewBox="0 0 32 32"
                  data-name="Layer 1"
                  id="Layer_1">
                  <rect height="1" width="12" x="10" y="29" />
                  <rect height="1" width="12" x="10" y="2" />
                  <rect height="1" width="9" x="13" y="20" />
                  <rect height="1" width="2" x="10" y="20" />
                  <rect height="1" width="9" x="13" y="23" />
                  <rect height="1" width="2" x="10" y="23" />
                  <rect
                    height="1"
                    transform="translate(9.5 41.5) rotate(-90)"
                    width="20"
                    x="15.5"
                    y="15.5"
                  />
                  <path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z" />
                  <rect
                    height="1"
                    transform="translate(-9.5 22.5) rotate(-90)"
                    width="20"
                    x="-3.5"
                    y="15.5"
                  />
                  <path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z" />
                  <path d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z" />
                  <path d="M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z" />
                  <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,3.8,3.8,0,0,1,.17-1.07,4,4,0,0,1,7.66,0A3.8,3.8,0,0,1,20,16.93a7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2Z" />
                  <path d="M16,8a2,2,0,1,0,2,2A2,2,0,0,0,16,8Zm0,3a1,1,0,1,1,1-1A1,1,0,0,1,16,11Z" />
                  <path d="M20.67,15.2a5,5,0,0,0-9.34,0,4.46,4.46,0,0,0-.27,1.09,7.42,7.42,0,0,0,.94.64,8,8,0,0,0,8,0,7.42,7.42,0,0,0,.94-.64A4.46,4.46,0,0,0,20.67,15.2ZM16,17a7,7,0,0,1-3.83-1.14,4,4,0,0,1,7.66,0A7,7,0,0,1,16,17Z" />
                  <path d="M20.67,15.2a6,6,0,0,1-.84.66,4,4,0,0,0-7.66,0,6,6,0,0,1-.84-.66,5,5,0,0,1,9.34,0Z" />
                </svg>
              </a>
            </div>
            <a
              href="https://github.com/brianhngo/"
              target="_blank"
              rel="noreferrer"
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:bg-slate-700">
              <Image
                src="/github-icon.svg"
                alt="LinkedIn"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/brianhngo/"
              target="_blank"
              rel="noreferrer"
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:bg-slate-700">
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={48}
                height={48}
                className="h-12 w-12"
              />
            </a>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
