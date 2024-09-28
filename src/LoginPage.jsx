import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        login();
        navigate('/editor');
    };




    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Add your form fields here */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                        Log In
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-400">
                    Don't have an account? <Link to='/register' className="text-blue-400 hover:text-blue-300">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;