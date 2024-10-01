import React, { useState } from 'react';

const CSSTutorial = () => {
  
  const cssTutorials = [
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
            '• CSS allows you to create consistent, reusable styles across multiple web pages.',
            '• It separates content from presentation, improving web page structure.',
            '• It enables responsiveness, making websites adaptable to different screen sizes.'
          ],
          example: `/* Styling for multiple screen sizes */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

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
          title: 'CSS Syntax',
          content: [
            '• A CSS rule consists of a selector and a declaration block',
            '• The selector points to the HTML element you want to style',
            '• The declaration block contains one or more declarations separated by semicolons',
            '• Each declaration includes a CSS property name and a value, separated by a colon'
          ],
          example: `selector {
  property: value;
  property: value;
}`
        },
        {
          title: 'CSS Selectors',
          content: [
            '• CSS selectors are used to target HTML elements you want to style.',
            '• Common selectors include element, id, and class selectors.',
            '• You can also use pseudo-classes (e.g., `:hover`, `:active`) to apply styles in certain states.'
          ],
          example: `/* Pseudo-class selector */
button:hover {
  background-color: green;
}`
        }
      ]
    },
    {
      title: 'CSS Box Model',
      content: 'The CSS box model is a crucial concept that describes how elements are displayed on the web.',
      sections: [
        {
          title: 'Understanding the Box Model',
          content: [
            '• Every element on the web page is a rectangular box according to the CSS box model.',
            '• The box model consists of: content, padding, border, and margin.',
            '• Padding is the space between the content and the border, while the margin is the space outside the border.'
          ],
          example: `div {
  width: 300px;
  padding: 10px;
  border: 5px solid gray;
  margin: 20px;
}`
        },
        {
          title: 'Adjusting Box Sizing',
          content: [
            '• By default, the width and height you set in CSS only apply to the content box.',
            '• You can change this behavior with the `box-sizing` property.',
            '• Use `border-box` to include padding and border in the element’s total width and height.'
          ],
          example: `div {
  width: 300px;
  padding: 10px;
  border: 5px solid gray;
  box-sizing: border-box;
}`
        }
      ]
    },
    {
      title: 'CSS Flexbox',
      content: 'CSS Flexbox is a layout module that allows you to design flexible and responsive layout structures.',
      sections: [
        {
          title: 'What is Flexbox?',
          content: [
            '• Flexbox is a one-dimensional layout model used to arrange items in rows or columns.',
            '• It provides an efficient way to align items and distribute space within a container.',
            '• Key properties include `justify-content`, `align-items`, and `flex-direction`.'
          ],
          example: `.container {
  display: flex;
  justify-content: space-between;
}

.item {
  flex: 1;
  padding: 10px;
}`
        },
        {
          title: 'Flexbox Properties',
          content: [
            '• `flex-direction`: Defines the direction of the flex items (row, column, row-reverse, column-reverse).',
            '• `justify-content`: Aligns flex items horizontally (center, space-between, space-around).',
            '• `align-items`: Aligns flex items vertically (flex-start, flex-end, center, baseline).'
          ],
          example: `.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}`
        }
      ]
    },
    {
      title: 'CSS Grid',
      content: 'CSS Grid is a two-dimensional layout system for web pages.',
      sections: [
        {
          title: 'What is CSS Grid?',
          content: [
            '• CSS Grid allows you to create grid-based layouts with rows and columns.',
            '• It provides more flexibility and control compared to older layout systems like floats and tables.',
            '• You can define both horizontal and vertical track sizes with grid properties.'
          ],
          example: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}`
        },
        {
          title: 'CSS Grid Properties',
          content: [
            '• `grid-template-columns` and `grid-template-rows`: Defines the number of rows and columns.',
            '• `grid-gap`: Specifies the gap between grid items.',
            '• `grid-area`: Specifies a grid item’s position in the grid layout.'
          ],
          example: `.container {
  display: grid;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
}`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          CSS Tutorial
        </h1>
        
        {cssTutorials.map((topic, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">{topic.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{topic.content}</p>

            {topic.sections.map((section, sIndex) => (
              <div key={sIndex} className="mb-4">
                <div
                  className="cursor-pointer text-xl font-semibold text-gray-100 mb-2"
                  onClick={() => handleToggle(sIndex)}
                >
                  {section.title}
                </div>
                
                  <div className="text-gray-600 dark:text-gray-300">
                    <ul className="list-disc pl-6 mb-4">
                      {section.content.map((point, pIndex) => (
                        <li key={pIndex} className="mb-1">{point}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold mb-2">Example:</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        <code>{section.example}</code>
                      </pre>
                    </div>
                  </div>
              
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSSTutorial;
