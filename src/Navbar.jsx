import React, { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {   
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className=" text-xl font-bold">  <p className=' flex gap-4 items-center'> <img  className='hidden sm:block w-6 h-6'  src="https://img.icons8.com/?size=100&id=60985&format=png&color=FFFFFF" />  Code Wizard </p>
        </Link>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10 mx-4">
          <NavLinks isAuthenticated={isAuthenticated} logout={logout} />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div ref={dropdownRef} className="md:hidden flex  justify-evenly mt-4">
          <NavLinks isAuthenticated={isAuthenticated} logout={logout} mobile />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isAuthenticated, logout, mobile = false }) => {
  const linkClass = `block ${mobile ? 'py-2' : ''} hover:text-blue-400 transition`;
  const linklogoutClass = `block ${mobile ? 'py-2' : ''} hover:text-red-400 transition`;

  return (
    <>
    {isAuthenticated && (
      <Link to="/main" className={linkClass}>Home</Link>
    )}
      {isAuthenticated && (
        <Link to="/editor" className={linkClass}>Editor</Link>
      )}
      <Link to="/contact" className={linkClass}>Contact</Link>
      {isAuthenticated ? (
        <button onClick={logout} className={linklogoutClass}>Logout</button>
      ) : (
        <Link to="/login" className={linkClass}>Login</Link>
      )}
    </>
  );
};

export default Navbar;
