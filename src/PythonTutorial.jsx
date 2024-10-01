import React from 'react';

const PythonTutorial = () => {
  const pythonTutorials = [
    {
      title: 'Python Introduction',
      content: 'Python is a popular programming language created by Guido van Rossum, released in 1991.',
      sections: [
        {
          title: 'What is Python?',
          content: [
            '• Python is a popular programming language.',
            '• Python can be used on a server to create web applications.',
            '• Python can be used alongside software to create workflows.',
            '• Python can connect to database systems. It can also read and modify files.',
            '• Python can be used to handle big data and perform complex mathematics.',
            '• Python can be used for rapid prototyping or for production-ready software development.'
          ],
          example: `print("Hello, World!")`
        }
      ]
    },
    {
      title: 'Python Variables',
      content: 'Variables are containers for storing data values.',
      sections: [
        {
          title: 'Creating Variables',
          content: [
            '• Python has no command for declaring a variable.',
            '• A variable is created the moment you first assign a value to it.',
            '• Variables do not need to be declared with any particular type.',
            '• Variables can even change type after they have been set.'
          ],
          example: `x = 5\ny = "John"\nprint(x)\nprint(y)`
        },
        {
          title: 'Variable Names',
          content: [
            '• A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume).',
            '• Rules for Python variables:',
            '  - Must start with a letter or the underscore character.',
            '  - Cannot start with a number.',
            '  - Can only contain alpha-numeric characters and underscores (A-z, 0-9, and _).',
            '  - Are case-sensitive (age, Age, and AGE are three different variables).'
          ],
          example: `myvar = "John"\nmy_var = "John"\n_my_var = "John"\nmyVar = "John"\nMYVAR = "John"\nmyvar2 = "John"`
        }
      ]
    },
    {
      title: 'Python Data Types',
      content: 'Python has various built-in data types.',
      sections: [
        {
          title: 'Python Numbers',
          content: [
            '• Integers: Whole numbers, e.g., 1, 2, 3.',
            '• Floats: Decimal numbers, e.g., 1.1, 2.2, 3.3.',
            '• Complex numbers: Numbers with real and imaginary parts, e.g., 1 + 2j.'
          ],
          example: `x = 5\nprint(type(x))\ny = 3.14\nprint(type(y))`
        },
        {
          title: 'Python Strings',
          content: [
            '• Strings are sequences of characters enclosed in single or double quotes.',
            '• Strings can be indexed, concatenated, and modified.'
          ],
          example: `str1 = "Hello"\nstr2 = "World"\nprint(str1 + " " + str2)`
        }
      ]
    },
    {
      title: 'Python Operators',
      content: 'Python supports various operators for arithmetic and logical operations.',
      sections: [
        {
          title: 'Arithmetic Operators',
          content: [
            '• + : Addition',
            '• - : Subtraction',
            '• * : Multiplication',
            '• / : Division',
            '• % : Modulus'
          ],
          example: `a = 10\nb = 5\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)`
        }
      ]
    },
    {
      title: 'Python Control Structures',
      content: 'Control structures dictate the flow of execution.',
      sections: [
        {
          title: 'If...Else',
          content: [
            '• The if statement is used for conditional execution.',
            '• You can also use elif and else for more complex conditions.'
          ],
          example: `a = 10\nif a > 0:\n    print("Positive")\nelse:\n    print("Negative or Zero")`
        },
        {
          title: 'Loops',
          content: [
            '• Python supports while and for loops for iteration.',
            '• The break and continue statements can alter loop execution.'
          ],
          example: `for i in range(5):\n    print(i)\n\nwhile a > 0:\n    print(a)\n    a -= 1`
        }
      ]
    },
    {
      title: 'Python Functions',
      content: 'Functions are blocks of reusable code.',
      sections: [
        {
          title: 'Defining Functions',
          content: [
            '• Use the def keyword to define a function.',
            '• Functions can take parameters and return values.'
          ],
          example: `def greet(name):\n    return f"Hello, {name}"\n\nprint(greet("World"))`
        }
      ]
    },
    // Add other topics and sections as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          Python Tutorial
        </h1>

        {pythonTutorials.map((topic, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">{topic.title}</h2>
            <p className="text-gray-300 mb-4">{topic.content}</p>

            {topic.sections.map((section, sIndex) => (
              <div key={sIndex} className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  {section.content.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Example:</h4>
                  <pre className="bg-gray-100 dark:bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto">
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

export default PythonTutorial;
