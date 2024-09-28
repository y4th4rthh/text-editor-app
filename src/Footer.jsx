import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
const Footer = () => (
  <footer className="bg-gray-900 text-white p-4">
    <div className="container mx-auto text-center">
      <p className='sm:hidden' >&copy; 2024 "I Can Compile" ahh Editor.</p>

      <div className='flex justify-around items-center mt-4'>
      <p className='hidden sm:block'>&copy; 2024 "I Can Compile" ahh Editor. All rights reserved.</p>
        <div className=' text-gray-100 flex justify-around sm:w-[250px] w-full mt-4 sm:mt-0'>
          <a
            href="mailto:yatharthpatel014@gmail.com"
            rel="noreferrer"
            className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            style={{ cursor: 'pointer' }}
          >
            <FiMail className='text-xl ' />
          </a>
          <a
            href="https://x.com/ptlyatharth"
            target='_blank'
            rel="noreferrer"
            className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            style={{ cursor: 'pointer' }}
          >
            <FaTwitter className='text-xl ' />
          </a>
          <a
            href="https://www.linkedin.com/in/yatharth-patel-2505b4288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target='_blank'
            rel="noreferrer"
            className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            style={{ cursor: 'pointer' }}
          >
            <AiFillLinkedin className='text-xl ' />
          </a>
          <a
            href="https://github.com/y4th4rthh"
            target='_blank'
            rel="noreferrer"
            className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
            style={{ cursor: 'pointer' }}
          >
            <FaGithub className='text-xl ' />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
