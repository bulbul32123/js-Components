import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-trigger">
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <a key={index} href={item.href} className="dropdown-item">
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
