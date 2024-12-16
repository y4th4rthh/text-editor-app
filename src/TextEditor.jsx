import React, { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {  Palette, BookOpen } from 'lucide-react';

function TextEditor() {
    const [code, setCode] = useState('// Write your code here');
    const [language, setLanguage] = useState('python');
    const [output, setOutput] = useState('');
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (language === 'html' || language === 'css') {
            runCode();
        }
    }, [code, language]);

    const runCode = () => {
        axios.post('https://text-editor-app-backend.onrender.com/run-code', { code, language })
            .then(res => {
                if (language === 'html' || language === 'css') {
                    setPreview(res.data.output || res.data.error);
                } else {
                    setOutput(res.data.output || res.data.error);
                }
            })
            .catch(err => console.error(err));
    };

    const saveFile = () => {
        const blob = new Blob([code], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `code.${language}`;
        link.click();
    };

    const clearCode = () => {
        setCode('');
    };

    const copyCode = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                alert('Code copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    const renderPreview = () => {
        if (language === 'html') {
            return <iframe srcDoc={preview} className="w-full h-full border-0" />;
        } else if (language === 'css') {
            return (
                <div className="w-full h-full bg-white">
                    <style>
                        {`
                        /* Reset default styles */
                        #preview-content * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        /* Apply user's CSS only to the preview content */
                        #preview-content {
                            ${preview}
                        }
                        `}
                    </style>
                    <div id='preview-content' className="p-4">
                        <h1>CSS Preview</h1>
                        <p>This is a sample text to preview your CSS.</p>
                        <button className="btn">Sample Button</button>
                        <div className="custom-class">A div with a custom class</div>
                        <ul>
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                        </ul>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='bg-gradient-to-br from-gray-900 to-gray-800'>
            <div className='w-full min-h-screen  flex justify-center items-center p-6'>
                <div className="w-full max-w-6xl bg-gray-800 shadow-2xl rounded-xl p-8 space-y-8">
                    <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
                        Compile Wizard
                    </h1>

                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="w-full lg:w-1/2">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-300 mb-2">Language:</label>
                                <select
                                    className="bg-gray-700 border border-gray-600 rounded-md p-3 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                                    onChange={(e) => setLanguage(e.target.value)}
                                    value={language}
                                >
                                    <option value="html">HTML</option>
                                    <option value="css">CSS</option>
                                    <option value="python">Python</option>
                                </select>
                            </div>
                            <MonacoEditor
                                height="400px"
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
                            <div className="mt-4 grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                                <button
                                    onClick={runCode}
                                    className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                                >
                                    Run Code
                                </button>
                                <button
                                    onClick={saveFile}
                                    className="bg-green-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out"
                                >
                                    Save File
                                </button>
                                <button
                                    onClick={clearCode}
                                    className="bg-red-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
                                >
                                    Clear Code
                                </button>
                                <button
                                    onClick={copyCode}
                                    className="bg-yellow-600 text-white font-semibold px-5 py-3 rounded-md shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out"
                                >
                                    Copy Code
                                </button>

                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 space-y-6">
                            {(language === 'html' || language === 'css') ? (
                                <div>
                                    <h2 className="text-lg font-medium text-gray-200 mb-3">Output:</h2>
                                    <div className="bg-white rounded-lg overflow-hidden h-[450px]">
                                        {renderPreview()}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-lg font-medium text-gray-200 mb-3">Output:</h2>
                                    <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg w-full overflow-auto h-[450px] border border-gray-700">
                                        {output || 'Run the code to see the output here.'}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to elevate your coding experience?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
                    Try experiencing the power of multi-language tutorials.
                    Learn and executes the code snippets seamlessly with our advanced online compiler.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        to="/main"
                         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 text-sm sm:py-3 sm:px-8 rounded transition duration-300 sm:text-lg "
                    >
                        <BookOpen size={20} />
                        Tutorial Wizard
                    </Link>

                    <Link
                        to="/color-picker"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-2 text-sm sm:py-3 sm:px-8 rounded transition duration-300 sm:text-lg "
                    >
                        <Palette size={20} />
                        Color Wizard
                    </Link>
                </div>
            </div>
        </div>


    );
}

export default TextEditor;
