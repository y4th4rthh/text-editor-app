import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({  title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const HomePage = () => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
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

      {/* Call to Action Section */}
      <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your coding experience?</h2>
        <p className="text-xl mb-6">Join thousands of developers who trust our platform for their coding needs.</p>
        <Link 
          to="/register" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition duration-300 text-lg mr-4"
        >
          Sign Up Free
        </Link>
        <Link 
          to="/editor" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300 text-lg"
        >
          Contact Us?
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;