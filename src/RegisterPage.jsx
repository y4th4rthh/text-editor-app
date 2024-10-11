import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://text-editor-app-backend.onrender.com/api/register', {
        email: form.email,
        password: form.password
      });
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response?.data?.error || error.message);
      setError(error.response?.data?.error || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative z-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center'>   
      <div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
        <p className='font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>JOIN US</p>
        <h2 className='text-5xl font-extrabold pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Register.</h2>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='font-medium mb-4 text-white'>Your Email <span className='text-red-500'>*</span></span>
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
            <span className='font-medium mb-4 text-white'>Your Password <span className='text-red-500'>*</span></span>
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
          <label className='flex flex-col'>
            <span className='font-medium mb-4 text-white'>Confirm Password <span className='text-red-500'>*</span></span>
            <input
              type='password'
              name='confirmPassword'
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
              required
            />
          </label>

          <button
            type='submit'
            className='pt-3 px-8 w-fit font-bold bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-8 text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-blue-400 hover:text-blue-300">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
