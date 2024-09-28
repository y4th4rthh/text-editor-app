import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">"I Can Compile" ahh Editor</Link>
        
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
        <div className="md:hidden mt-4">
          <NavLinks isAuthenticated={isAuthenticated} logout={logout} mobile />
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isAuthenticated, logout, mobile = false }) => {
  const linkClass = `block ${mobile ? 'py-2' : ''} hover:text-blue-400 transition`;

  return (
    <>
      <Link to="/" className={linkClass}>Home</Link>
      {isAuthenticated && (
        <Link to="/editor" className={linkClass}>Editor</Link>
      )}
      <Link to="/contact" className={linkClass}>Contact</Link>
      {isAuthenticated ? (
        <button onClick={logout} className={linkClass}>Logout</button>
      ) : (
        <Link to="/login" className={linkClass}>Login</Link>
      )}
    </>
  );
};

export default Navbar;
