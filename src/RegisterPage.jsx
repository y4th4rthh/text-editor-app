import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdClose } from 'react-icons/io';

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
      setError(error.response?.data?.error || 'Error: An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className='relative z-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center'>   
    //   <div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl'>
    //     <p className='font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>JOIN US</p>
    //     <h2 className='text-5xl font-extrabold pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Register.</h2>
    //     {error && <p className="text-red-500 mt-4">{error}</p>}
    //     <form
    //       onSubmit={handleSubmit}
    //       className='mt-12 flex flex-col gap-8'
    //     >
    //       <label className='flex flex-col'>
    //         <span className='font-medium mb-4 text-white'>Your Email <span className='text-red-500'>*</span></span>
    //         <input
    //           type='email'
    //           name='email'
    //           value={form.email}
    //           onChange={handleChange}
    //           placeholder="Enter your email"
    //           className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
    //           required
    //         />
    //       </label>
    //       <label className='flex flex-col'>
    //         <span className='font-medium mb-4 text-white'>Your Password <span className='text-red-500'>*</span></span>
    //         <input
    //           type='password'
    //           name='password'
    //           value={form.password}
    //           onChange={handleChange}
    //           placeholder="Enter your password"
    //           className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
    //           required
    //         />
    //       </label>
    //       <label className='flex flex-col'>
    //         <span className='font-medium mb-4 text-white'>Confirm Password <span className='text-red-500'>*</span></span>
    //         <input
    //           type='password'
    //           name='confirmPassword'
    //           value={form.confirmPassword}
    //           onChange={handleChange}
    //           placeholder="Confirm your password"
    //           className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
    //           required
    //         />
    //       </label>

    //       <button
    //         type='submit'
    //         className='pt-3 px-8 w-fit font-bold bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'
    //       >
    //         {loading ? "Registering..." : "Register"}
    //       </button>
    //     </form>
    //     <p className="mt-8 text-center text-gray-400">
    //       Already have an account? <Link to="/login" className="text-blue-400 hover:text-blue-300">Login here</Link>
    //     </p>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-4xl font-extrabold text-left pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Register.</h2>
              <p className="text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-light mb-8">JOIN US :)</p>
            </div>
            <div className=''>
              <Link to="/">
                 <IoMdClose className='font-semibold text-3xl cursor-pointer hover:scale-125 transition-transform ease-linear text-red-500' />

              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border border-gray-600 rounded focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white pl-10"
                  required
                />

              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-600 rounded focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white pl-10"
                  required
                />

              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  value={form.confirmpassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border border-gray-600 rounded focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white pl-10"
                  required
                />

              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"

              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        <div className="px-8 py-4 font-semibold bg-gray-700 border-t border-gray-600 flex gap-2 justify-start">
          <span className="text-sm   text-gray-50">Already have an account?</span>
          <Link to="/login" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
