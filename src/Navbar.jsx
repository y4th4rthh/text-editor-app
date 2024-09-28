import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">"I Can Compile" ahh Editor</Link>
        <div className="space-x-10 mx-4">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          {isAuthenticated && (
            <Link to="/editor" className="hover:text-blue-400 transition">Editor</Link>
          )}
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          {isAuthenticated ? (
            <button onClick={logout} className="hover:text-blue-400 transition">Logout</button>
          ) : (
            <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
