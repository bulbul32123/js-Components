import React, { useEffect, useState } from 'react'
import { FaMoon, FaSearch } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import logo from '/Logo.svg';

import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const components = [
    { text: 'Component 1', href: '/components/1' },
    { text: 'Component 2', href: '/components/2' },
    { text: 'Component 3', href: '/components/3' },
  ];

  const templates = [
    { text: 'Template 1', href: '/templates/1' },
    { text: 'Template 2', href: '/templates/2' },
    { text: 'Template 3', href: '/templates/3' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(false);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setIsDarkMode((prev) => !prev);
    localStorage.setItem("theme", newTheme);
  };


  return (
    <nav className={`px-4 py-1 flex justify-between items-center sticky top-0 border-b border-light dark:border-dark`}>
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className='w-12 h-12' />
      </div>
      <div className="flex gap-4 items-center  text-dark dark:text-gray ">
        <Link to='/components'>Components</Link>
        <Link to='/templates'>Templates</Link>
      </div>

      {/* Search Bar, Dark Mode, Sign In */}
      <div className="flex items-center gap-2 relative">
        <span className='absolute text-lightGray dark:text-gray left-2 top-1/2 -translate-y-1/2 text-gray-500'>
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="pl-8 pr-1 py-2 rounded-sm text-sm bg-light dark:bg-dark dark:text-gray outline-none border-none"
        />
        <button onClick={toggleDarkMode} className="p-2 rounded-sm bg-light dark:bg-dark">
          {!isDarkMode ? <IoIosSunny className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
        <button className="px-5 py-2 bg-[#6E3DFF] text-white rounded-md">Sign In</button>
      </div>
    </nav>
  );
}
