import React, { useState, useRef } from 'react';

const COLOR_DATA = [
  { name: 'Red', hex: '#FF0000', rgb: 'rgb(255, 0, 0)' },
  { name: 'Blue', hex: '#0000FF', rgb: 'rgb(0, 0, 255)'  },
  { name: 'Green', hex: '#00FF00', rgb: 'rgb(0, 255, 0)' },
  { name: 'Yellow', hex: '#FFFF00', rgb: 'rgb(255, 255, 0)'},
  { name: 'Cyan', hex: '#00FFFF', rgb: 'rgb(0, 255, 255)'},
  { name: 'Magenta', hex: '#FF00FF', rgb: 'rgb(255, 0, 255)'},
  { name: 'Black', hex: '#000000', rgb: 'rgb(0, 0, 0)'},
  { name: 'White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)'},
  { name: 'Gray', hex: '#808080', rgb: 'rgb(128, 128, 128)'},
  { name: 'Orange', hex: '#FFA500', rgb: 'rgb(255, 165, 0)'},
  { name: 'Purple', hex: '#800080', rgb: 'rgb(128, 0, 128)'},
  { name: 'Brown', hex: '#A52A2A', rgb: 'rgb(165, 42, 42)'},
  { name: 'Pink', hex: '#FFC0CB', rgb: 'rgb(255, 192, 203)'},
  { name: 'Navy', hex: '#000080', rgb: 'rgb(0, 0, 128)'},
  { name: 'Teal', hex: '#008080', rgb: 'rgb(0, 128, 128)'},
];

const ColorPicker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const timeoutRef = useRef(null);

  const filteredColors = COLOR_DATA.filter(color =>
    color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    color.hex.toLowerCase().includes(searchTerm.toLowerCase()) ||
    color.rgb.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedText(''), 2000);
    });
  };

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center p-6 '>
      <div className="w-full max-w-5xl bg-gray-800 shadow-2xl rounded-xl sm:p-8 p-4 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
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
                <th className="px-4 py-2 text-center text-gray-200">Hex</th>
                <th className="px-4 py-2 text-center text-gray-200">RGB</th>
              </tr>
            </thead>
            <tbody>
              {filteredColors.map((color, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-800 border border-gray-600' : 'bg-gray-650'}>
                  <td className="px-4 py-2 text-center">
                    <div 
                      className="w-8 h-8 rounded-full mx-auto" 
                      style={{backgroundColor: color.hex}}
                    ></div>
                  </td>
                  <td className="px-4 py-2 text-center text-gray-200 hidden sm:block">{color.name}</td>
                  <td className="px-4 py-2 text-center text-xs sm:text-base">
                    <button 
                      onClick={() => handleCopy(color.hex)}
                      className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
                    >
                      {color.hex}
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center text-xs sm:text-base">
                    <button 
                      onClick={() => handleCopy(color.rgb)}
                      className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
                    >
                      {color.rgb}
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
  );
};

export default ColorPicker;