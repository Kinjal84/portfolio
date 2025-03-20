'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Prevent errors during SSR

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav
      className={`navbar fixed ${
        isScrolled ? 'top-nav-collapse' : ''
      } top-0 w-screen py-[15px]`}
      role="navigation"
    >
      <div className="navbar-container w-[95%]">
        <div className="flex justify-between">
          <Link
            className="inline-flex items-center text-white uppercase ml-[-15px] p-[15px]"
            href="http://brittanychiang.com/"
          >
            <div className="hexagon mask-hexagon mr-2">
              <span className="text-cyan-500 text-base lato-bold">K</span>
            </div>
            Kinjal Bosamiya
          </Link>
          <button
            type="button"
            className="hidden"
            data-toggle="collapse"
            data-target=".navbar-main-collapse"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="w-fit flex items-center">
            <ul className="flex gap-2 list-none text-white uppercase text-sm">
              <li>
                <a href="#" className="p-[15px]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="p-[15px]">
                  Passion
                </a>
              </li>
              <li>
                <a href="#" className="p-[15px]">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="p-[15px]">
                  Work
                </a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
