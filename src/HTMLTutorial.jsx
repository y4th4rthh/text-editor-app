import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const HTMLTutorial = () => {
  const htmlTutorials = [
    {
      title: 'HTML Introduction',
      content: 'HTML is the standard markup language for creating Web pages.',
      sections: [
        {
          title: 'What is HTML?',
          content: [
            '• HTML stands for Hyper Text Markup Language',
            '• HTML is the standard markup language for creating Web pages',
            '• HTML describes the structure of a Web page',
            '• HTML consists of a series of elements',
            '• HTML elements tell the browser how to display the content'
          ],
          example: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`
        }
      ]
    },
    {
      title: 'HTML Elements',
      content: 'HTML elements are the building blocks of HTML pages.',
      sections: [
        {
          title: 'HTML Elements',
          content: [
            '• An HTML element is defined by a start tag, some content, and an end tag',
            '• The HTML element is everything from the start tag to the end tag',
            '• Some HTML elements have no content (like the <br> element)',
            '• Empty elements are closed in the start tag',
            '• Most HTML elements can have attributes'
          ],
          example: `<tagname>Content goes here...</tagname>`
        },
        {
          title: 'Nested HTML Elements',
          content: [
            '• HTML elements can be nested (elements can contain elements)',
            '• All HTML documents consist of nested HTML elements'
          ],
          example: `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`
        }
      ]
    },
    {
      title: 'HTML Attributes',
      content: 'HTML attributes provide additional information about HTML elements.',
      sections: [
        {
          title: 'HTML Attributes',
          content: [
            '• All HTML elements can have attributes',
            '• Attributes provide additional information about elements',
            '• Attributes are always specified in the start tag',
            '• Attributes usually come in name/value pairs like: name="value"'
          ],
          example: `<a href="https://www.w3schools.com">Visit W3Schools</a>
<img src="img_girl.jpg" width="500" height="600">
<p style="color:red;">This is a red paragraph.</p>`
        }
      ]
    },
    {
      title: 'HTML Headings',
      content: 'HTML headings are defined with the <h1> to <h6> tags.',
      sections: [
        {
          title: 'HTML Headings',
          content: [
            '• HTML headings are defined with the <h1> to <h6> tags',
            '• <h1> defines the most important heading',
            '• <h6> defines the least important heading'
          ],
          example: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
      <div className="flex justify-between ">
          <div>
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 pb-2">
              HTML Tutorial
            </h1>
          </div>
          <div className=''>
            <Link to="/main">
              <IoMdClose className='font-semibold text-3xl cursor-pointer hover:scale-125 transition-transform ease-linear text-red-500' />
            </Link>
          </div>
        </div>

        {htmlTutorials.map((topic, index) => (
          <div key={index} className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl flex items-center font-bold text-white mb-4">
              <div className="text-blue-400 mr-2">
                <BookOpen className="w-6 h-6" />
              </div>
              {topic.title}</h2>
            <p className="text-gray-300 mb-4">{topic.content}</p>

            {topic.sections.map((section, sIndex) => (
              <div key={sIndex} className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-300">
                  {section.content.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">Example:</h4>
                  <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-white">
                    <code>{section.example}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HTMLTutorial;
