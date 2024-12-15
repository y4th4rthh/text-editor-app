import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (username === '' || user_email === '' || user_message === '') {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xyzgeall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          email: user_email,
          message: user_message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully');
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert('An error occurred. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className='relative z-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen'>   
    //   <div className='contact overflow-x-hidden pt-14  py-7' id='contact'>
    //     <div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl '>
    //       <p className='font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>REACH OUT TO ME</p>
    //       <h2 className='text-5xl font-extrabold mt-2  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Contact.</h2>
    //       <form
    //         ref={formRef}
    //         onSubmit={handleSubmit}
    //         className='mt-12 flex flex-col gap-8'
    //       >
    //         <label className='flex flex-col'>
    //           <span className='font-medium mb-4 text-white'>Your Name</span>
    //           <input
    //             type='text'
    //             name='name'
    //             value={form.name}
    //             onChange={handleChange}
    //             placeholder="Enter your name"
    //             className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
    //             required
    //           />
    //         </label>
    //         <label className='flex flex-col'>
    //           <span className='font-medium mb-4 text-white'>Your email</span>
    //           <input
    //             type='email'
    //             name='email'
    //             value={form.email}
    //             onChange={handleChange}
    //             placeholder="Ex:abc@gmail.com"
    //             className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
    //             required
    //           />
    //         </label>
    //         <label className='flex flex-col'>
    //           <span className='font-medium mb-4 text-white'>Your Message</span>
    //           <textarea
    //             rows={7}
    //             name='message'
    //             value={form.message}
    //             onChange={handleChange}
    //             placeholder='Do you have anything to say?'
    //             className='py-4 px-6 rounded-lg font-medium bg-gray-700 text-white placeholder-gray-400'
    //             required
    //           />
    //         </label>

    //         <button
    //           type='submit'
    //           className='pt-3 px-8 w-fit font-bold bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300'
    //         >
    //           {loading ? "Sending..." : "Send"}
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between ">
            <div>
              <h2 className="text-4xl font-extrabold text-left pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Contact.</h2>
              <p className="text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-light mb-8">REACH OUT TO ME</p>
            </div>
            <div className=''>
              <Link to="/">
                <IoMdClose className='font-semibold text-3xl cursor-pointer hover:scale-125 transition-transform ease-linear text-red-500' />
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 border border-gray-600 rounded focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white pl-10"
                  required
                />

              </div>
            </div>


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
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your message</label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  style={{ resize: "none" }}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Do you have anything to say?"
                  className=" w-full px-4 py-2 border border-gray-600 rounded focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white pl-10"
                  required
                />

              </div>
            </div>



            <div>
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"

              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
