import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, BookOpen, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const TailwindTutorial = () => {
    const [expandedTopics, setExpandedTopics] = useState({});
    const [expandedSections, setExpandedSections] = useState({});
    const [copiedIndex, setCopiedIndex] = useState(null);

    const toggleTopic = (topicIndex) => {
        setExpandedTopics(prev => ({
            ...prev,
            [topicIndex]: !prev[topicIndex]
        }));
    };

    const toggleSection = (topicIndex, sectionIndex) => {
        setExpandedSections(prev => ({
            ...prev,
            [`${topicIndex}-${sectionIndex}`]: !prev[`${topicIndex}-${sectionIndex}`]
        }));
    };

    const copyToClipboard = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const tailwindTutorials = [
        {
            category: "Core Concepts",
            icon: <BookOpen className="w-6 h-6" />,
            topics: [
                {
                    title: 'Utility-First Fundamentals',
                    content: 'Learn how Tailwind\'s utility-first workflow helps you build faster.',
                    sections: [
                        {
                            title: 'Building with Utility Classes',
                            content: [
                                '• Use utility classes to build complex components',
                                '• Work within the constraints of a system',
                                '• Build responsive designs right in your HTML'
                            ],
                            example: `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>`
                        }
                    ]
                },
                {
                    title: 'Responsive Design',
                    content: 'Use responsive modifiers to build adaptive user interfaces.',
                    sections: [
                        {
                            title: 'Responsive Modifiers',
                            content: [
                                '• sm: for small screens (640px and up)',
                                '• md: for medium screens (768px and up)',
                                '• lg: for large screens (1024px and up)',
                                '• xl: for extra large screens (1280px and up)'
                            ],
                            example: `<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/store.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat? We have the perfect location.</p>
    </div>
  </div>
</div>`
                        }
                    ]
                },
                {
                    title: 'Hover, Focus, & Other States',
                    content: 'Style elements based on user interaction and other states.',
                    sections: [
                        {
                            title: 'Pseudo-Class Variants',
                            content: [
                                '• hover: for hover states',
                                '• focus: for focus states',
                                '• active: for active states',
                                '• visited: for visited links'
                            ],
                            example: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">

</button>`
                        }
                    ]
                },
                {
                    title: 'Layouts',
                    content: 'Use Tailwind\'s layout utilities to build complex designs.',
                    sections: [
                        {
                            title: 'Flexbox & Grid',
                            content: [
                                '• Use flexbox utilities to build layouts',
                                '• Use grid utilities to build grid-based layouts',
                                '• Combine flexbox and grid utilities for complex layouts'
                            ],
                            example: `<div class="grid grid-cols-3 gap-4">
    <div class="bg-gray-300">1</div>
    <div class="bg-gray-300">2</div>
    <div class="bg-gray-300">3</div>
</div>`
                        }
                    ]
                },
                {
                    title: 'Typography',
                    content: 'Style text and headings using Tailwind\'s typography utilities.',
                    sections: [
                        {
                            title: 'Font Sizes',
                            content: [
                                '• Use text utilities to set font size',
                                '• Use heading utilities to set font size'
                            ],
                            example: `<h1 class="text-4xl font-extrabold">Tailwind CSS Tutorial</h1>`
                        }
                    ]
                },
                {
                    title: 'Colors',
                    content: 'Use Tailwind\'s color utilities to style text, backgrounds, and borders.',
                    sections: [
                        {
                            title: 'Text Colors',
                            content: [
                                '• Use text utilities to set text color',
                                '• Use background utilities to set background color',
                                '• Use border utilities to set border color'
                            ],
                            example: `<div class="text-blue-500 bg-gray-200 border border-blue-500">Tailwind CSS Tutorial</div>`
                        }
                    ]
                },
                {
                    title: 'Spacing',
                    content: 'Use Tailwind\'s spacing utilities to add padding, margin, and more.',
                    sections: [
                        {
                            title: 'Padding & Margin',
                            content: [
                                '• Use padding utilities to add padding',
                                '• Use margin utilities to add margin',
                                '• Use space utilities to add padding and margin'
                            ],
                            example: `<div class="p-4 m-4 space-x-4">Tailwind CSS Tutorial</div>`
                        }
                    ]
                },
                {
                    title: 'Borders',
                    content: 'Use Tailwind\'s border utilities to style borders and rounded corners.',
                    sections: [
                        {
                            title: 'Border Styles',
                            content: [
                                '• Use border utilities to style borders',
                                '• Use rounded utilities to add rounded corners'
                            ],
                            example: `<div class="border border-gray-300 rounded-lg">Tailwind CSS Tutorial</div>`
                        }
                    ]
                },
                {
                    title: 'Shadows',
                    content: 'Use Tailwind\'s shadow utilities to add drop shadows to elements.',
                    sections: [
                        {
                            title: 'Shadow Styles',
                            content: [
                                '• Use shadow utilities to add drop shadows',
                                '• Use ring utilities to add focus shadows'
                            ],
                            example: `<div class="shadow-lg">Tailwind CSS Tutorial</div>`
                        }
                    ]
                },
                {
                    title: 'Interactivity',
                    content: 'Use Tailwind\'s interactivity utilities to add transitions and animations.',
                    sections: [
                        {
                            title: 'Transition & Animation',
                            content: [
                                '• Use transition utilities to add transitions',
                                '• Use animation utilities to add animations'
                            ],
                            example: `<div class="transition-all duration-300 ease-in-out">Tailwind CSS Tutorial</div>`
                        }
                    ]
                },
                {
                    title: 'Accessibility',
                    content: 'Use Tailwind\'s accessibility utilities to improve user experience.',
                    sections: [
                        {
                            title: 'Screen Reader Utilities',
                            content: [
                                '• Use sr-only to hide elements visually',
                                '• Use not-sr-only to show elements visually'
                            ],
                            example: `<button class="sr-only">Click me</button>`
                        }
                    ]
                },
                {
                    title: 'Customization',
                    content: 'Customize Tailwind\'s default theme to match your brand.',
                    sections: [
                        {
                            title: 'Customizing Colors',
                            content: [
                                '• Use the colors object to customize colors',
                                '• Use the extend key to add new colors'
                            ],
                            example: `module.exports = {
    theme: {
        colors: {
            primary: '#3490dc',
            secondary: '#ffed4a',
            danger: '#e3342f'
        }
    }
}`
                        }
                    ]
                },
                {
                    title: 'Optimizing for Production',
                    content: 'Use PurgeCSS to remove unused styles in production builds.',
                    sections: [
                        {
                            title: 'PurgeCSS Configuration',
                            content: [
                                '• Use PurgeCSS to remove unused styles',
                                '• Use the purge key to configure PurgeCSS'
                            ],
                            example: `module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js'
                        ]
}`
                        }
                    ]
                },
                {
                    title: 'Dark Mode',
                    content: 'Use Tailwind\'s dark mode utilities to create a dark theme.',
                    sections: [
                        {
                            title: 'Dark Mode Configuration',
                            content: [
                                '• Use the dark key to enable dark mode',
                                '• Use the class key to customize dark mode classes'
                            ],
                            example: `module.exports = {
    dark: 'class'
}`
                        }
                    ]
                },
                {
                    title: 'JIT Mode',
                    content: 'Use Tailwind\'s Just-In-Time compiler for faster builds.',
                    sections: [
                        {
                            title: 'JIT Mode Configuration',
                            content: [
                                '• Use the mode key to enable JIT mode',
                                '• Use the jit key to configure JIT mode'
                            ],
                            example: `module.exports = {
    mode: 'jit',
    jit: true
}`
                        }
                    ]
                },
                {
                    title: 'Plugins',
                    content: 'Extend Tailwind with custom plugins for additional features.',
                    sections: [
                        {
                            title: 'Adding Plugins',
                            content: [
                                '• Use the plugins key to add custom plugins',
                                '• Use the require function to load plugins'
                            ],
                            example: `module.exports = {
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
                        ]
}`
                        }
                    ]
                },
                {
                    title: 'Configuration',
                    content: 'Configure Tailwind\'s default settings to match your project.',
                    sections: [
                        {
                            title: 'Tailwind Configuration',
                            content: [
                                '• Use the theme key to customize the default theme',
                                '• Use the variants key to configure responsive variants'
                            ],
                            example: `module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#3490dc',
                secondary: '#ffed4a',
                danger: '#e3342f'
            }
        }   
    },  
    variants: {
        extend: {
            opacity: ['disabled']
        }
    }
}`
                        }
                    ]
                },
                {
                    title: 'Migration',
                    content: 'Migrate from Tailwind v1 to v2 with the official upgrade guide.',
                    sections: [
                        {
                            title: 'Upgrading to v2',
                            content: [
                                '• Use the official upgrade guide to migrate',
                                '• Update your project configuration to v2'
                            ],
                            example: `module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3490dc',
                secondary: '#ffed4a',
                danger: '#e3342f'
            }
        }   
    },
    variants: {
        extend: {
            opacity: ['disabled']
        }
    }
}`
                        }
                    ]
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
                            Tailwind CSS Tutorial
                        </h1>
                    </div>
                    <div className=''>
                        <Link to="/main">
                            <IoMdClose className='font-semibold text-3xl cursor-pointer hover:scale-125 transition-transform ease-linear text-red-500' />
                        </Link>
                    </div>
                </div>

                {tailwindTutorials.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-8">
                        <div className="flex items-center mb-4">

                        </div>

                        {category.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="mb-8">
                                <div className="flex items-center mb-4">
                                    <div className="text-blue-400 mr-2">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{topic.title}</h2>
                                </div>

                                <div className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleTopic(topicIndex)}
                                        className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <h3 className="text-xl font-semibold text-white">{topic.title}</h3>
                                        {expandedTopics[topicIndex] ? (
                                            <ChevronUp className="w-5 h-5 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>

                                    {expandedTopics[topicIndex] && (
                                        <div className="p-4 border-t border-gray-700">
                                            <p className="text-gray-300 mb-4">{topic.content}</p>

                                            {topic.sections.map((section, sectionIndex) => (
                                                <div key={sectionIndex} className="mb-4">
                                                    <button
                                                        onClick={() => toggleSection(topicIndex, sectionIndex)}
                                                        className="w-full flex items-center justify-between bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                                                    >
                                                        <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                                                        {expandedSections[`${topicIndex}-${sectionIndex}`] ? (
                                                            <ChevronUp className="w-4 h-4 text-gray-400" />
                                                        ) : (
                                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                                        )}
                                                    </button>

                                                    {expandedSections[`${topicIndex}-${sectionIndex}`] && (
                                                        <div className="mt-4 pl-4">
                                                            <ul className="list-disc pl-6 text-gray-300 mb-4">
                                                                {section.content.map((point, pIndex) => (
                                                                    <li key={pIndex} className="mb-2">{point}</li>
                                                                ))}
                                                            </ul>
                                                            <div className="mt-4">
                                                                <div className="flex items-center mb-2">
                                                                    <Code className="w-5 h-5 text-blue-400 mr-2" />
                                                                    <h5 className="text-sm font-semibold text-white">Example:</h5>
                                                                </div>
                                                                <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto">
                                                                    <code>{section.example}</code>
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
                ))}
            </div>
        </div>
    );
};

export default TailwindTutorial;
