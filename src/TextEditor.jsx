import { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';

function TextEditor() {
    const [code, setCode] = useState('// Write your code here');
    const [language, setLanguage] = useState('javascript');
    const [output, setOutput] = useState('');

    const runCode = () => {
        axios.post('https://text-editor-app-backend.onrender.com/run-code', { code, language })
            .then(res => setOutput(res.data.output || res.data.error))
            .catch(err => console.error(err));
    };

    const saveFile = () => {
        const blob = new Blob([code], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `code.${language}`;
        link.click();
    };

    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center p-6'>
            <div className="w-full max-w-6xl bg-gray-800 shadow-2xl rounded-xl p-8 space-y-8">
                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
                    "I Can Compile" ahh Editor
                </h1>

                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="w-full lg:w-2/3">
                        <div className="max-w-4xl mx-auto">
                            <MonacoEditor
                                height="500px"
                                language={language}
                                theme="vs-dark"
                                value={code}
                                onChange={(value) => setCode(value)}
                                className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-700"
                                options={{
                                    minimap: { enabled: false },
                                    fontSize: 14,
                                    scrollBeyondLastLine: false,
                                }}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Language:</label>
                            <select
                                className="bg-gray-700 border border-gray-600 rounded-md p-3 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                                onChange={(e) => setLanguage(e.target.value)}
                                value={language}
                            >
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={runCode}
                                className="w-full bg-blue-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out flex items-center justify-center"
                            >
                                Run Code
                            </button>
                            <button
                                onClick={saveFile}
                                className="w-full bg-green-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center"
                            >
                                Save File
                            </button>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium text-gray-200 mb-3">Output:</h2>
                            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg w-full overflow-auto max-h-64 border border-gray-700">
                                {output || 'Run the code to see the output here.'}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextEditor;
