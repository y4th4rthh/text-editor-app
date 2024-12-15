import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, BookOpen, Folder, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const PythonTutorial = () => {
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

  const pythonTutorials = [
    {
      category: "Getting Started",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        {
          title: 'Python Introduction',
          content: 'Begin your Python journey with the basics.',
          sections: [
            {
              title: 'What is Python?',
              content: [
                '• High-level programming language created by Guido van Rossum',
                '• Known for its simplicity and readability',
                '• Supports multiple programming paradigms',
                '• Large standard library and active community'
              ],
              example: `print("Hello, World!")`
            }
          ]
        },
        {
          title: 'Python Syntax',
          content: 'Learn the basic syntax rules of Python.',
          sections: [
            {
              title: 'Basic Syntax',
              content: [
                '• Python uses indentation for code blocks',
                '• Statements typically end with a newline',
                '• Python is case sensitive'
              ],
              example: `if True:\n    print("This is indented")\nprint("This is not indented")`
            }
          ]
        },
        {
          title: 'Python Comments',
          content: 'How to write comments in Python code.',
          sections: [
            {
              title: 'Single and Multi-line Comments',
              content: [
                '• Use # for single-line comments',
                '• Use triple quotes for multi-line comments'
              ],
              example: `# This is a single-line comment\n\n"""\nThis is a\nmulti-line comment\n"""`
            }
          ]
        }
      ]
    },
    {
      category: "Data Types and Variables",
      icon: <Database className="w-6 h-6" />,
      topics: [
        {
          title: 'Python Variables',
          content: 'Learn about variables in Python.',
          sections: [
            {
              title: 'Variable Assignment',
              content: [
                '• Variables are created when assigned a value',
                '• No declaration needed',
                '• Dynamic typing'
              ],
              example: `x = 5\ny = "Hello"\nz = 3.14`
            }
          ]
        },
        {
          title: 'Python Data Types',
          content: 'Explore different data types in Python.',
          sections: [
            {
              title: 'Basic Data Types',
              content: [
                '• int: Integer numbers',
                '• float: Decimal numbers',
                '• str: String (text)',
                '• bool: Boolean (True/False)'
              ],
              example: `x = 5       # int\ny = 3.14    # float\nz = "Hello"  # str\nw = True    # bool`
            }
          ]
        }
      ]
    },
    {
      category: "Control Structures",
      icon: <Code className="w-6 h-6" />,
      topics: [
        {
          title: 'Python If...Else',
          content: 'Conditional statements in Python.',
          sections: [
            {
              title: 'Conditional Execution',
              content: [
                '• if statement for single condition',
                '• elif for additional conditions',
                '• else for when no conditions are met'
              ],
              example: `x = 10\nif x > 20:\n    print("x is greater than 20")\nelif x > 5:\n    print("x is greater than 5")\nelse:\n    print("x is 5 or less")`
            }
          ]
        },
        {
          title: 'Python Loops',
          content: 'Different types of loops in Python.',
          sections: [
            {
              title: 'For and While Loops',
              content: [
                '• for loops for iterating over sequences',
                '• while loops for conditional iteration'
              ],
              example: `# For loop\nfor i in range(5):\n    print(i)\n\n# While loop\nx = 0\nwhile x < 5:\n    print(x)\n    x += 1`
            }
          ]
        }
      ]
    },
    {
      category: "File Handling",
      icon: <Folder className="w-6 h-6" />,
      topics: [
        {
          title: 'Python File Handling',
          content: 'Working with files in Python.',
          sections: [
            {
              title: 'File Operations',
              content: [
                '• Opening and closing files',
                '• Reading from files',
                '• Writing to files',
                '• File modes (read, write, append)'
              ],
              example: `# Reading a file\nwith open('file.txt', 'r') as f:\n    content = f.read()\n\n# Writing to a file\nwith open('file.txt', 'w') as f:\n    f.write('Hello, World!')`
            }
          ]
        }
      ]
    },
    {
      category: "Functions and Modules",
      icon: <Code className="w-6 h-6" />,
      topics: [
        {
          title: 'Python Functions',
          content: 'Creating and using functions in Python.',
          sections: [
            {
              title: 'Function Definition',
              content: [
                '• def keyword to define a function',
                '• Parameters and return values',
                '• Default arguments and keyword arguments'
              ],
              example: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))`
            }
          ]
        },
        {
          title: 'Python Modules',
          content: 'Organizing code into modules and packages.',
          sections: [
            {
              title: 'Module Importing',
              content: [
                '• import statement to use modules',
                '• from ... import ... for specific functions',
                '• as keyword for aliasing'
              ],
              example: `import math\n\nprint(math.sqrt(16))`
            }
          ]
        }
      ]
    },
    {
      category: "Object-Oriented Programming",
      icon: <Database className="w-6 h-6" />,
      topics: [
        {
          title: 'Python Classes',
          content: 'Creating classes and objects in Python.',
          sections: [
            {
              title: 'Class Definition',
              content: [
                '• class keyword to define a class',
                '• __init__ method for initialization',
                '• self parameter for instance methods'
              ],
              example: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nalice = Person("Alice", 30)\nprint(alice.name)`
            }
          ]
        },
        {
          title: 'Python Inheritance',
          content: 'Extending classes using inheritance.',
          sections: [
            {
              title: 'Class Inheritance',
              content: [
                '• Subclass inherits attributes and methods from superclass',
                '• super() function to call superclass methods'
              ],
              example: `class Student(Person):\n    def __init__(self, name, age, grade):\n        super().__init__(name, age)\n        self.grade = grade\n\nbob = Student("Bob", 25, "A")\nprint(bob.grade)`
            }
          ]
        }
      ]
    },

    {
      category: "Error Handling",
      icon: <Code className="w-6 h-6" />,
      topics: [
        {
          title: 'Python Exceptions',
          content: 'Handling errors and exceptions in Python.',
          sections: [
            {
              title: 'Exception Handling',
              content: [
                '• try block for error-prone code',
                '• except block for handling exceptions',
                '• finally block for cleanup code'
              ],
              example: `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`
            }
          ]
        }
      ]
    },

    {
      category: "Advanced Topics",
      icon: <Database className="w-6 h-6" />,
      topics: [
        {
          title: 'Python Generators',
          content: 'Creating iterators using generators in Python.',
          sections: [
            {
              title: 'Generator Functions',
              content: [
                '• yield keyword to return values',
                '• state is saved between calls',
                '• memory-efficient for large datasets'
              ],
              example: `def count(n):\n    for i in range(n):\n        yield i\n\nfor num in count(5):\n    print(num)`
            }
          ]
        },
        {
          title: 'Python Decorators',
          content: 'Extending the behavior of functions using decorators.',
          sections: [
            {
              title: 'Function Wrappers',
              content: [
                '• Decorator function to modify behavior',
                '• @ syntax for applying decorators',
                '• Useful for logging, timing, etc.'
              ],
              example: `def log_time(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"Execution time: {end - start} seconds")\n        return result\n    return wrapper\n\n@log_time\ndef slow_function():\n    time.sleep(2)\n\nslow_function()`
            }
          ]
        }
      ]
    },
    {
      category: "External Libraries",
      icon: <Database className="w-6 h-6" />,
      topics: [
        {
          title: 'Python NumPy',
          content: 'Introduction to the NumPy library for numerical computing.',
          sections: [
            {
              title: 'NumPy Arrays',
              content: [
                '• ndarray class for multi-dimensional arrays',
                '• Vectorized operations for efficient computation',
                '• Linear algebra, random numbers, etc.'
              ],
              example: `import numpy as np\n\nx = np.array([1, 2, 3])\nprint(x)`
            }
          ]
        },
        {
          title: 'Python Pandas',
          content: 'Introduction to the Pandas library for data analysis.',
          sections: [
            {
              title: 'Pandas DataFrames',
              content: [
                '• DataFrame class for tabular data',
                '• Indexing, filtering, grouping, etc.',
                '• Reading and writing data from files'
              ],
              example: `import pandas as pd\n\ndata = {\n    'Name': ['Alice', 'Bob', 'Charlie'],\n    'Age': [25, 30, 35]\n}\ndf = pd.DataFrame(data)\nprint(df)`
            }
          ]
        }
      ]
    },
    {
      category: "Web Development",
      icon: <Database className="w-6 h-6" />,
      topics: [
        {
          title: 'Python Flask',
          content: 'Building web applications with the Flask framework.',
          sections: [
            {
              title: 'Flask Basics',
              content: [
                '• Lightweight web framework for Python',
                '• Routing, templates, and forms',
                '• RESTful APIs and extensions'
              ],
              example: `from flask import Flask\n\napp = Flask(__name__)\n\
\
@app.route('/')\ndef index():\n    return 'Hello, World!'\n\nif __name__ == '__main__':\n    app.run()`
            }
          ]
        },
        {
          title: 'Python Django',
          content: 'Building web applications with the Django framework.',
          sections: [
            {
              title: 'Django Features',
              content: [
                '• High-level web framework for Python',
                '• Admin interface, ORM, and authentication',
                '• Template engine and middleware'
              ],
              example: `from django.http import HttpResponse\nfrom django.urls import path\n\ndef index(request):\n    return HttpResponse("Hello, World!")\n\nurlpatterns = [\n    path('', index)\n]`
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
              Python Tutorial
            </h1>
          </div>
          <div className=''>
            <Link to="/main">
              <IoMdClose className='font-semibold text-3xl cursor-pointer hover:scale-125 transition-transform ease-linear text-red-500' />
            </Link>
          </div>
        </div>

        {pythonTutorials.map((category, categoryIndex) => (
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

export default PythonTutorial;
