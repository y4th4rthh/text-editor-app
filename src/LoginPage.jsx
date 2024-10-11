import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://text-editor-app-backend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      login(data.token);
      navigate('/editor');
    } catch (error) {
      console.error('Login failed:', error.message);
      setError("Invalid Credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative z-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center'>
      <div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
        <p className='font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>WELCOME BACK</p>
        <h2 className='text-5xl font-extrabold pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Login.</h2>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        
        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-4 text-white'>Your Email </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4 text-white'>Your Password </span>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
              required
            />
          </label>

          <button
            type='submit'
            className='pt-3 px-8 w-fit font-bold bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300'
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-8 text-center text-gray-400">
          Don't have an account? <Link to="/register" className="text-blue-400 hover:text-blue-300">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
