import React, { useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Palette, Search } from 'lucide-react';

const ColorPicker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [colorMode, setColorMode] = useState('all'); // all, light, dark
  const timeoutRef = useRef(null);

  const COLOR_DATA = [
    { name: 'Red', tailwind: 'bg-red-500', hex: '#ef4444', category: 'bright' },
    { name: 'Blue', tailwind: 'bg-blue-500', hex: '#3b82f6', category: 'bright' },
    { name: 'Green', tailwind: 'bg-green-500', hex: '#22c55e', category: 'bright' },
    { name: 'Yellow', tailwind: 'bg-yellow-500', hex: '#eab308', category: 'bright' },
    { name: 'Cyan', tailwind: 'bg-cyan-500', hex: '#06b6d4', category: 'bright' },
    { name: 'Magenta', tailwind: 'bg-pink-500', hex: '#ec4899', category: 'bright' },
    { name: 'Black', tailwind: 'bg-black', hex: '#000000', category: 'dark' },
    { name: 'White', tailwind: 'bg-white', hex: '#ffffff', category: 'light' },
    { name: 'Gray', tailwind: 'bg-gray-500', hex: '#6b7280', category: 'neutral' },
    { name: 'Orange', tailwind: 'bg-orange-500', hex: '#f97316', category: 'bright' },
    { name: 'Purple', tailwind: 'bg-purple-500', hex: '#a855f7', category: 'bright' },
    { name: 'Brown', tailwind: 'bg-yellow-900', hex: '#854d0e', category: 'dark' },
    { name: 'Pink', tailwind: 'bg-pink-300', hex: '#f9a8d4', category: 'light' },
    { name: 'Navy', tailwind: 'bg-blue-900', hex: '#1e3a8a', category: 'dark' },
    { name: 'Teal', tailwind: 'bg-teal-500', hex: '#14b8a6', category: 'bright' },
    { name: 'Lime', tailwind: 'bg-lime-500', hex: '#84cc16', category: 'bright' },
    { name: 'Indigo', tailwind: 'bg-indigo-500', hex: '#6366f1', category: 'bright' },
    { name: 'Rose', tailwind: 'bg-rose-500', hex: '#f43f5e', category: 'bright' },
    { name: 'Amber', tailwind: 'bg-amber-500', hex: '#f59e0b', category: 'bright' },
    { name: 'Emerald', tailwind: 'bg-emerald-500', hex: '#10b981', category: 'bright' },
    { name: 'Slate', tailwind: 'bg-slate-500', hex: '#64748b', category: 'neutral' },
    { name: 'Sky', tailwind: 'bg-sky-500', hex: '#0ea5e9', category: 'bright' },
    { name: 'Violet', tailwind: 'bg-violet-500', hex: '#8b5cf6', category: 'bright' },
    { name: 'Fuchsia', tailwind: 'bg-fuchsia-500', hex: '#d946ef', category: 'bright' },
    { name: 'Stone', tailwind: 'bg-stone-500', hex: '#78716c', category: 'dark' },
    { name: 'Zinc', tailwind: 'bg-zinc-500', hex: '#71717a', category: 'neutral' },
  ];

  const filteredColors = useMemo(() => {
    return COLOR_DATA.filter(color => 
      color.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (colorMode === 'all' || color.category === colorMode)
    );
  }, [searchTerm, colorMode]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedText(''), 2000);
    });
  };

  return (
    <div className='bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen'>
      <div className='container mx-auto px-4 py-12'>
        <div className="bg-gray-800 shadow-2xl rounded-xl p-8 space-y-8">
          <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            Color Wizard
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-300 mb-2">Search Colors:</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search colors..."
                  className="bg-gray-700 border border-gray-600 rounded-md p-3 w-full text-gray-200 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Color Mode:</label>
              <div className="flex gap-2">
                {['all', 'light', 'dark', 'bright', 'neutral'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setColorMode(mode)}
                    className={`px-3 py-2 rounded-md text-sm capitalize transition duration-300 ${
                      colorMode === mode 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg border border-gray-600 shadow-lg">
              <thead>
                <tr className="bg-gray-700 border border-gray-600">
                  <th className="px-4 py-2 text-center text-gray-200">Color</th>
                  <th className="px-4 py-2 text-center text-gray-200 hidden sm:block">Name</th>
                  <th className="px-4 py-2 text-center text-gray-200">Hex</th>
                  <th className="px-4 py-2 text-center text-gray-200">Tailwind</th>
                </tr>
              </thead>
              <tbody>
                {filteredColors.map((color, index) => (
                  <tr 
                    key={index} 
                    className="group hover:bg-gray-700 transition duration-300 ease-in-out"
                  >
                    <td className="px-4 py-2 text-center">
                      <div
                        className={`w-8 h-8 rounded-full mx-auto ${color.tailwind} border border-gray-600`}
                        title={color.name}
                      ></div>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-200 hidden sm:block">{color.name}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleCopy(color.hex)}
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
                        >
                          {copiedText === color.hex ? <Check size={16} /> : <Copy size={16} />}
                          {color.hex}
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleCopy(color.tailwind)}
                          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
                        >
                          {copiedText === color.tailwind ? <Check size={16} /> : <Copy size={16} />}
                          {color.tailwind}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Color Count and Info */}
          <div className="text-center text-gray-400 mt-4">
            <p>
              Showing {filteredColors.length} of {COLOR_DATA.length} colors 
              {searchTerm && ` matching "${searchTerm}"`}
              {colorMode !== 'all' && ` in ${colorMode} category`}
            </p>
          </div>

          {copiedText && (
            <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 transition duration-300 ease-in-out">
              <Check size={20} />
              Copied: {copiedText}
            </div>
          )}
        </div>

        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to elevate your coding experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Discover the power of multi-language compilation right in your browser.
            Write, test, and run code seamlessly with our advanced online compiler.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/editor"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2"
            >
              <Palette size={20} />
              Compile Wizard
            </Link>

            <Link
              to="/main"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2"
            >
              <Palette size={20} />
              Tutorial Wizard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
