import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const tutorials = [
  {
    title: 'HTML Tutorial',
    description: 'Learn the standard markup language for creating web pages.',
    path: '/html-tutorial',
    color: 'from-orange-400 to-red-500',
    features: ['Structure web pages', 'Create forms', 'Add multimedia', 'Semantic markup']
  },
  {
    title: 'CSS Tutorial',
    description: 'Master the styling language that brings life to web pages.',
    path: '/css-tutorial',
    color: 'from-blue-400 to-purple-500',
    features: ['Style layouts', 'Responsive design', 'Animations', 'Flexbox & Grid']
  },
  {
    title: 'Python Tutorial',
    description: 'Explore the versatile programming language for backend development.',
    path: '/python-tutorial',
    color: 'from-green-400 to-teal-500',
    features: ['Data structures', 'Object-oriented programming', 'File handling', 'Web frameworks']
  },
  
  {
    title: 'Tailwind CSS Tutorial',
    description: 'Master the utility-first CSS framework for rapid UI development.',
    path: '/tailwind-tutorial',
    color: 'from-purple-400 to-pink-500',
    features: ['Utility classes', 'Responsive design', 'Custom configurations', 'Performance optimization']
  },

  {
    title: 'Node.js Tutorial',
    description: 'Learn the most popular serverside framework for responsive web design.',
    path: '/nodejs-tutorial',
    color: 'from-teal-400 to-blue-500',
    features: ['Node modules', 'File system', 'HTTP Server', 'Asynchronous Programming']
  },
  {
    title: 'React.js Tutorial',
    description: 'Build powerful user interfaces with the popular JavaScript library.',
    path: '/react-tutorial',
    color: 'from-blue-400 to-indigo-500',
    features: ['Component-based UI', 'Virtual DOM', 'State management', 'Hooks and lifecycle']
  }
];

const HomePage = () => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="sm:text-5xl text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          "I Can Compile" ahh Editor
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience the power of multi-language compilation right in your browser.
          Write, test, and run code seamlessly with our advanced online compiler.
        </p>
        <Link
          to="/editor"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300 text-lg"
        >
          Start Coding Now
        </Link>
      </div>



      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Compiler?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Multi-Language Support"
            description="From Python to Java, compile and run code in multiple programming languages."
          />
          <FeatureCard
            title="Instant Compilation"
            description="Experience lightning-fast compilation and execution times for rapid development and testing."
          />
          <FeatureCard
            title="Accessible Anywhere"
            description="Code on-the-go with our cloud-based compiler. Access your projects from any device, anytime."
          />
          <FeatureCard
            title="Collaborative Coding"
            description="Share your code snippets easily and collaborate with peers in real-time."
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold">
            Learn to Code
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Choose a tutorial to start your coding journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.slice(0, 3).map((tutorial, index) => (
            <Link key={index} to={tutorial.path} className="transform hover:scale-105 transition-transform duration-300">
              <div className="h-full bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${tutorial.color} p-6`}>
                  <div className="flex justify-between items-start">
                    <span className="text-white text-opacity-80 text-sm">
                      Free Tutorial
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-4">
                    {tutorial.title}
                  </h2>
                  <p className="text-white text-opacity-90">
                    {tutorial.description}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    What you'll learn:
                  </h3>
                  <ul className="space-y-2">
                    {tutorial.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}

          {tutorials.slice(3, 6).map((tutorial, index) => (
            <Link key={index} to={tutorial.path} className="transform hover:scale-105 transition-transform duration-300">
              <div className="h-full bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${tutorial.color} p-6`}>
                  <div className="flex justify-between items-start">
                    <span className="text-white text-opacity-80 text-sm">
                      Free Tutorial
                    </span>
                    <div className="bg-zinc-200 text-clip bg-opacity-20 text-xs font-semibold px-2 py-1 rounded">
                      NEW
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-4">
                    {tutorial.title}
                  </h2>
                  <p className="text-white text-opacity-90">
                    {tutorial.description}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">
                    What you'll learn:
                  </h3>
                  <ul className="space-y-2">
                    {tutorial.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your coding experience?</h2>
        <p className="text-xl mb-6">Join thousands of developers who trust our platform for their coding needs.</p>
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 text-sm sm:py-3 sm:px-8 rounded transition duration-300 sm:text-lg mr-4"
        >
          Sign Up Free
        </Link>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 text-sm sm:py-3 sm:px-8 rounded transition duration-300 sm:text-lg"
        >
          Contact Us?
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
