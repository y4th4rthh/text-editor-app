import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Palette, Layout, Box } from 'lucide-react';

const CSSTutorial = () => {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

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

  const cssTutorials = [
    {
      category: "CSS Basics",
      icon: <Palette className="w-6 h-6" />,
      topics: [
        {
          title: 'CSS Introduction',
          content: 'CSS is the language we use to style an HTML document.',
          sections: [
            {
              title: 'What is CSS?',
              content: [
                '• CSS stands for Cascading Style Sheets',
                '• CSS describes how HTML elements should be displayed',
                '• CSS saves a lot of work. It can control the layout of multiple web pages all at once',
                '• External stylesheets are stored in CSS files'
              ],
              example: `body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`
            },
            {
              title: 'Why Use CSS?',
              content: [
                '• CSS allows you to create consistent, reusable styles across multiple web pages',
                '• It separates content from presentation, improving web page structure',
                '• It enables responsiveness, making websites adaptable to different screen sizes'
              ],
              example: `/* Styling for multiple screen sizes */
@media screen and (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}`
            }
          ]
        },
        {
          title: 'CSS Syntax',
          content: 'CSS syntax consists of a selector and a declaration block.',
          sections: [
            {
              title: 'Basic Syntax',
              content: [
                '• A CSS rule consists of a selector and a declaration block',
                '• The selector points to the HTML element you want to style',
                '• The declaration block contains one or more declarations separated by semicolons',
                '• Each declaration includes a CSS property name and a value, separated by a colon'
              ],
              example: `selector {
  property1: value1;
  property2: value2;
}`
            }
          ]
        }
      ]
    },
    {
      category: "Layout Models",
      icon: <Layout className="w-6 h-6" />,
      topics: [
        {
          title: 'CSS Box Model',
          content: 'The CSS box model is the foundation of layout on the Web.',
          sections: [
            {
              title: 'Understanding the Box Model',
              content: [
                '• Every element on a web page is a rectangular box',
                '• The box model consists of: content, padding, border, and margin',
                '• The box-sizing property defines how the width and height are calculated'
              ],
              example: `.box {
  width: 300px;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
  box-sizing: border-box;
}`
            }
          ]
        },
        {
          title: 'CSS Flexbox',
          content: 'Flexbox is a one-dimensional layout method for laying out items in rows or columns.',
          sections: [
            {
              title: 'Flexbox Basics',
              content: [
                '• Flexbox is designed for one-dimensional layouts',
                '• The flex container becomes flexible by setting display: flex',
                '• Use flex properties to distribute space and align items'
              ],
              example: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
}`
            }
          ]
        }
      ]
    },
    {
      category: "CSS Grid",
      icon: <Box className="w-6 h-6" />,
      topics: [
        {
          title: 'Grid Layout',
          content: 'CSS Grid Layout is a two-dimensional layout system for the web.',
          sections: [
            {
              title: 'Grid Basics',
              content: [
                '• CSS Grid layout introduces a two-dimensional grid system',
                '• Allows you to divide a page into major regions',
                '• Defines relationships in terms of size, position, and layer'
              ],
              example: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

.grid-item {
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
}`
            }
          ]
        }
      ]
    },
    {
      category: "Responsive Design",
      icon: <Layout className="w-6 h-6" />,
      topics: [
        {
          title: 'Media Queries',
          content: 'Media queries are a key component of responsive design.',
          sections: [
            {
              title: 'Using Media Queries',
              content: [
                '• Media queries are used to apply different styles based on the device characteristics',
                '• They allow you to create responsive designs that adapt to different screen sizes',
                '• Media queries consist of a media type, zero or more expressions, and a block containing CSS'
              ],
              example: `/* Apply different styles for small screens */
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`
            }
          ]
        }
      ]
    },
    {
      category: "Advanced Topics",
      icon: <Palette className="w-6 h-6" />,
      topics: [
        {
          title: 'CSS Variables',
          content: 'CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.',
          sections: [
            {
              title: 'Defining Variables',
              content: [
                '• CSS variables are defined using the -- prefix',
                '• They are set using the var() function',
                '• Variables can be used in any property value'
              ],
              example: `:root {
  --main-color: #ff0000;
}

.element {
  color: var(--main-color);
}`
            }
          ]
        },
        {
          title: 'CSS Animations',
          content: 'CSS animations allow you to create animations on HTML elements.',
          sections: [
            {
              title: 'Keyframes Animation',
              content: [
                '• Keyframes are used to specify the styles at various points of an animation',
                '• The animation property is used to bind the keyframes to the selector',
                '• You can control the animation duration, timing function, and iteration count'
              ],
              example: `@keyframes example {
  0% {background-color: red;}
  25% {background-color: yellow;}
  50% {background-color: blue;}
  100% {background-color: green;}
}

div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: example 5s infinite;
}`
            }
          ]
        }
      ]
    },
    {
      category: "CSS Frameworks",
      icon: <Palette className="w-6 h-6" />,
      topics: [
        {
          title: 'Bootstrap',
          content: 'Bootstrap is a popular CSS framework for building responsive websites.',
          sections: [
            {
              title: 'Grid System',
              content: ['Containers are the most basic layout element in Bootstrap.'],
              example: `<div class="container">
  <!-- Content here -->
</div>

<div class="container-fluid">
  <!-- Full-width content here -->
</div>`
            },
            {
              title: 'Responsive Design',
              content: ['Bootstrap includes responsive, mobile-first fluid grid system.'],
              example: `<div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-8">.col-sm-8</div>
</div>`
            }
          ]
        },
        {
          title: 'Tailwind CSS',
          content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
          sections: [
            {
              title: 'Utility Classes',
              content: ['Tailwind CSS provides a set of utility classes for styling elements.'],
              example: `<div class="container mx-auto p-4 bg-gray-100">
  <h1 class="text-2xl font-bold text-blue-500">Hello, Tailwind!</h1>
</div>`
            },
            {
              title: 'Responsive Design',
              content: ['Tailwind CSS allows you to create responsive designs with ease.'],
              example: `<div class="container mx-auto p-4 bg-gray-100">

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div class="p-4 bg-white shadow">Card 1</div>
    <div class="p-4 bg-white shadow">Card 2</div>
    <div class="p-4 bg-white shadow">Card 3</div>
    <div class="p-4 bg-white shadow">Card 4</div>
  </div>

</div>`
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 pb-2">
          CSS Tutorial
        </h1>

        {cssTutorials.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <div className="flex items-center mb-4">
              <div className="text-blue-400 mr-2">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{category.category}</h2>
            </div>

            {category.topics.map((topic, topicIndex) => (
              <div key={topicIndex} className="mb-4 bg-gray-800 rounded-lg overflow-hidden">
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSSTutorial;
