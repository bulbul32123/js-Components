import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import logo from '/Logo.svg';

import Dropdown from './Dropdown';

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
    <nav className={`px-4 py-2 flex justify-between items-center  shadow-md`}>
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className='w-16 h-16' />
      </div>

      {/* Dropdowns */}
      <div className="flex gap-4">
        <Dropdown title="Components" items={components} />
        <Dropdown title="Templates" items={templates} />
      </div>

      {/* Search Bar, Dark Mode, Sign In */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-2 rounded-md text-sm dark:bg-[#1A1A1A] dark:text-gray focus:outline-none ring-green-500 focus:ring"
        />
        <button onClick={toggleDarkMode} className="p-2 rounded-md">
          {isDarkMode ? <IoIosSunny className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
        <button className="px-4 py-2 bg-[#6E3DFF] text-white rounded-md">Sign In</button>
      </div>
    </nav>
  );
}
