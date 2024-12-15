import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const NodeJSTutorial = () => {
    const [expandedSections, setExpandedSections] = useState({});
    const [expandedSubsections, setExpandedSubsections] = useState({});

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const toggleSubsection = (sectionId, subsectionIndex) => {
        setExpandedSubsections(prev => ({
            ...prev,
            [`${sectionId}-${subsectionIndex}`]: !prev[`${sectionId}-${subsectionIndex}`]
        }));
    };

    const sections = [
        {
            id: 1,
            title: 'Getting Started with Node.js',
            content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing you to run JavaScript on the server-side.',
            subsections: [
                {
                    title: 'Installation',
                    content: [
                        '• Download from official website',
                        '• Use a version manager like nvm',
                        '• Install via package manager'
                    ],
                    example: `// Check Node.js version
node --version

// Run a JavaScript file
node app.js`
                },
                {
                    title: 'Hello World',
                    content: ['Create a simple Node.js application'],
                    example: `// app.js
console.log('Hello, World!');

// Run with:
// node app.js`
                }
            ]
        },
        {
            id: 2,
            title: 'Modules',
            content: 'Node.js uses a module system to organize and reuse code.',
            subsections: [
                {
                    title: 'Core Modules',
                    content: ['Node.js comes with several built-in modules.'],
                    example: `const fs = require('fs');
const http = require('http');

// Use these modules...`
                },
                {
                    title: 'Custom Modules',
                    content: ['Create and use your own modules'],
                    example: `// myModule.js
module.exports = {
  sayHello: function() {
    console.log('Hello from myModule');
  }
};

// app.js
const myModule = require('./myModule');
myModule.sayHello();`
                }
            ]
        },
        {
            id: 3,
            title: 'File System',
            content: 'Node.js provides a File System module for interacting with the file system.',
            subsections: [
                {
                    title: 'Reading Files',
                    content: ['Read files asynchronously or synchronously'],
                    example: `const fs = require('fs');

// Asynchronous read
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous read
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);`
                },
                {
                    title: 'Writing Files',
                    content: ['Write or append to files'],
                    example: `const fs = require('fs');

// Write to file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File has been saved!');
});`
                }
            ]
        },
        {
            id: 4,
            title: 'HTTP Server',
            content: 'Create a basic HTTP server with Node.js',
            subsections: [
                {
                    title: 'Creating a Server',
                    content: ['Use the http module to create a server'],
                    example: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});`
                },
                {
                    title: 'Routing',
                    content: ['Handle different routes in your server'],
                    example: `const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.end('404 Not Found');
  }
});

server.listen(3000);`
                }
            ]
        },
        {
            id: 5,
            title: 'NPM',
            content: 'Node Package Manager (NPM) is the default package manager for Node.js',
            subsections: [
                {
                    title: 'Installing Packages',
                    content: ['Use npm to install third-party packages'],
                    example: `// Install a package
npm install express

// Install and save as a dependency
npm install --save express

// Install globally
npm install -g nodemon`
                },
                {
                    title: 'Package.json',
                    content: ['Manage project dependencies with package.json'],
                    example: `{
  "name": "my-node-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts": {
    "start": "node app.js"
  }
}`
                }
            ]
        },
        {
            id: 6,
            title: 'Asynchronous Programming',
            content: 'Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.',
            subsections: [
                {
                    title: 'Callbacks',
                    content: ['Use callbacks to handle asynchronous operations'],
                    example: `fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});`
                },
                {
                    title: 'Promises',
                    content: ['Use Promises for cleaner asynchronous code'],
                    example: `const fs = require('fs').promises;

fs.readFile('file.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));`
                },
                {
                    title: 'Async/Await',
                    content: ['Use async/await for more readable asynchronous code'],
                    example: `const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('file.txt');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();`
                }
            ]
        },
        {
            id: 7,
            title: 'Conclusion',
            content: 'Node.js is a powerful platform for building scalable network applications.',
            subsections: [
                {
                    title: 'Next Steps',
                    content: ['Explore more advanced topics and frameworks like Express.js'],
                    example: `// Install Express.js
npm install express

// Create a basic Express app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 pb-2">
                            Node.js Tutorial
                        </h1>
                    </div>
                    <div className=''>
                        <Link to="/main">
                             <IoMdClose className='font-semibold text-3xl cursor-pointer hover:scale-125 transition-transform ease-linear text-red-500' />

                        </Link>
                    </div>
                </div>

                {sections.map((section) => (
                    <div key={section.id} className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="text-green-400 mr-2">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                        </div>

                        <div className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors duration-200"
                            >
                                <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                                {expandedSections[section.id] ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {expandedSections[section.id] && (
                                <div className="p-4 border-t border-gray-700">
                                    <p className="text-gray-300 mb-4">{section.content}</p>

                                    {section.subsections.map((subsection, subsectionIndex) => (
                                        <div key={subsectionIndex} className="mb-4">
                                            <button
                                                onClick={() => toggleSubsection(section.id, subsectionIndex)}
                                                className="w-full flex items-center justify-between bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                                            >
                                                <h4 className="text-lg font-semibold text-white">{subsection.title}</h4>
                                                {expandedSubsections[`${section.id}-${subsectionIndex}`] ? (
                                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                                )}
                                            </button>

                                            {expandedSubsections[`${section.id}-${subsectionIndex}`] && (
                                                <div className="mt-4 pl-4">
                                                    <ul className="list-disc pl-6 text-gray-300 mb-4">
                                                        {subsection.content.map((point, pIndex) => (
                                                            <li key={pIndex} className="mb-2">{point}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="mt-4">
                                                        <div className="flex items-center mb-2">
                                                            <Code className="w-5 h-5 text-green-400 mr-2" />
                                                            <h5 className="text-sm font-semibold text-white">Example:</h5>
                                                        </div>
                                                        <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
                                                            <code>{subsection.example}</code>
                                                        </pre>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NodeJSTutorial;
