import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const ColorPicker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const timeoutRef = useRef(null);

  const COLOR_DATA = [
    { name: 'Red', tailwind: 'bg-red-500', hex: '#ef4444' },
    { name: 'Blue', tailwind: 'bg-blue-500', hex: '#3b82f6' },
    { name: 'Green', tailwind: 'bg-green-500', hex: '#22c55e' },
    { name: 'Yellow', tailwind: 'bg-yellow-500', hex: '#eab308' },
    { name: 'Cyan', tailwind: 'bg-cyan-500', hex: '#06b6d4' },
    { name: 'Magenta', tailwind: 'bg-pink-500', hex: '#ec4899' },
    { name: 'Black', tailwind: 'bg-black', hex: '#000000' },
    { name: 'White', tailwind: 'bg-white', hex: '#ffffff' },
    { name: 'Gray', tailwind: 'bg-gray-500', hex: '#6b7280' },
    { name: 'Orange', tailwind: 'bg-orange-500', hex: '#f97316' },
    { name: 'Purple', tailwind: 'bg-purple-500', hex: '#a855f7' },
    { name: 'Brown', tailwind: 'bg-yellow-900', hex: '#854d0e' },
    { name: 'Pink', tailwind: 'bg-pink-300', hex: '#f9a8d4' },
    { name: 'Navy', tailwind: 'bg-blue-900', hex: '#1e3a8a' },
    { name: 'Teal', tailwind: 'bg-teal-500', hex: '#14b8a6' },

    // Additional colors
    { name: 'Lime', tailwind: 'bg-lime-500', hex: '#84cc16' },
    { name: 'Indigo', tailwind: 'bg-indigo-500', hex: '#6366f1' },
    { name: 'Rose', tailwind: 'bg-rose-500', hex: '#f43f5e' },
    { name: 'Amber', tailwind: 'bg-amber-500', hex: '#f59e0b' },
    { name: 'Emerald', tailwind: 'bg-emerald-500', hex: '#10b981' },
    { name: 'Slate', tailwind: 'bg-slate-500', hex: '#64748b' },
    { name: 'Sky', tailwind: 'bg-sky-500', hex: '#0ea5e9' },
    { name: 'Violet', tailwind: 'bg-violet-500', hex: '#8b5cf6' },
    { name: 'Fuchsia', tailwind: 'bg-fuchsia-500', hex: '#d946ef' },
    { name: 'Stone', tailwind: 'bg-stone-500', hex: '#78716c' },
    { name: 'Zinc', tailwind: 'bg-zinc-500', hex: '#71717a' },
  ];


  const filteredColors = COLOR_DATA.filter(color =>
    color.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedText(''), 2000);
    });
  };

  return (
    <div className=' bg-gradient-to-br from-gray-900 to-gray-800'>
      <div className='w-full min-h-screen flex justify-center items-center sm:p-6 p-4'>
        <div className="w-full max-w-5xl bg-gray-800 shadow-2xl rounded-xl sm:p-8 p-4 space-y-8">
          <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            Color Wizard
          </h1>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Search Colors:</label>
            <input
              type="text"
              placeholder="Search colors..."
              className="bg-gray-700 border border-gray-600 rounded-md p-3 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg border border-gray-600 shadow-lg">
              <thead>
                <tr className="bg-gray-700 border border-gray-600">
                  <th className="px-4 py-2 text-center text-gray-200">Color</th>
                  <th className="px-4 py-2 text-center text-gray-200 hidden sm:block">Name</th>
                  <th className="px-4 py-2 text-center text-gray-200">Class</th>
                  <th className="px-4 py-2 text-center text-gray-200">Hex</th>
                </tr>
              </thead>
              <tbody>
                {filteredColors.map((color, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 border border-gray-600' : 'bg-gray-650'}>
                    <td className="px-4 py-2 text-center">
                      <div
                        className={`w-8 h-8 rounded-full mx-auto ${color.tailwind}`}
                      ></div>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-200 hidden sm:block">{color.name}</td>
                    <td className="px-4 py-2 text-center text-gray-200 text-sm sm:text-base">
                      <button
                        onClick={() => handleCopy(color.hex)}
                        className="hover:underline text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
                      >
                        {color.hex}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center text-sm sm:text-base">
                      <button
                        onClick={() => handleCopy(color.tailwind)}
                        className="hover:underline text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
                      >
                        {color.tailwind}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {copiedText && (
            <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out">
              Copied: {copiedText}
            </div>
          )}
        </div>
      </div>
      <div className="text-center py-16">

        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Experience the power of multi-language compilation right in your browser.
          Write, test, and run code seamlessly with our advanced online compiler.
        </p>
        <div className="flex flex-wrap  sm:gap-4 gap-4 justify-center">
          <Link
            to="/editor"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 text-sm sm:py-3 sm:px-8 rounded transition duration-300 sm:text-lg "
          >
            Compile Wizard
          </Link>

          <Link
            to="/color-picker"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-2 text-sm sm:py-3 sm:px-8 rounded transition duration-300 sm:text-lg "
          >
            Color Wizard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
