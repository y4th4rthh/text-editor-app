import { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';

function CodeFormatter() {
    const [code, setCode] = useState('// Write your code here');
    const [language, setLanguage] = useState('javascript');
    const [formattedCode, setFormattedCode] = useState('');

    const formatCode = () => {
        axios.post('https://your-backend-url.onrender.com/format-code', { code, language })
            .then(res => setFormattedCode(res.data.formattedCode))
            .catch(err => console.error(err));
    };

    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center p-6'>
            <div className="w-full max-w-6xl bg-gray-800 shadow-2xl rounded-xl p-8 space-y-8">
                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
                    Code Formatter
                </h1>

                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="w-full lg:w-1/2">
                        <MonacoEditor
                            height="500px"
                            language={language}
                            theme="vs-dark"
                            value={code}
                            onChange={(value) => setCode(value)}
                            className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-700"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <MonacoEditor
                            height="500px"
                            language={language}
                            theme="vs-dark"
                            value={formattedCode}
                            options={{ readOnly: true }}
                            className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-700"
                        />
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <select
                        className="bg-gray-700 border border-gray-600 rounded-md p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language}
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="json">JSON</option>
                        <option value="markdown">Markdown</option>
                        <option value="yaml">YAML</option>
                    </select>

                    <button
                        onClick={formatCode}
                        className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        Format Code
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CodeFormatter;
