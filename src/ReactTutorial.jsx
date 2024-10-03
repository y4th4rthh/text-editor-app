import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, BookOpen } from 'lucide-react';

const ReactTutorial = () => {
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

  const reactTutorials = [
    {
      category: "Core Concepts",
      icon: <BookOpen className="w-6 h-6" />,
      topics: [
        {
          title: 'React Basics',
          content: 'Learn the fundamental concepts of React.',
          sections: [
            {
              title: 'Components',
              content: [
                '• Build user interfaces out of individual pieces called components',
                '• Components are like JavaScript functions that return JSX',
                '• Can be function components or class components'
              ],
              example: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`
            },
            {
              title: 'State and Lifecycle',
              content: [
                '• State allows components to change their output over time',
                '• useState Hook adds state to function components',
                '• Returns current state value and a function to update it'
              ],
              example: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
            },
            {
              title: 'Props',
              content: [
                '• Props are read-only data passed from parent components',
                '• Components must act like pure functions with respect to their props',
                '• Props are immutable'
              ],
              example: `function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
    }
    
    function App() {
    return (
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        </div>
    );
    }`
            },
            {
              title: 'Events',
              content: [
                '• Handle user interactions with event handlers',
                '• Use camelCase for event names',
                '• Pass a function as the event handler'
              ],
              example: `function ActionLink() {
    function handleClick(e) {

    e.preventDefault();
    console.log('The link was clicked.');
    }

    return (
    <a href="#" onClick={handleClick}>
        Click me
    </a>
    );
    }`
            },
            {
              title: 'Conditional Rendering',
              content: [
                '• Use JavaScript operators like if or the conditional operator to create elements representing the current state',
                '• Use logical && operator to conditionally render elements'
              ],
              example: `function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
    }

    function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
    }

    function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
    return <UserGreeting />;
    }
    return <GuestGreeting />;
    }`
            },
            {
              title: 'Lists and Keys',
              content: [
                '• Use the map() function to render a list of items',
                '• Assign a key to each list item to help React identify which items have changed, are added, or are removed'
              ],
              example: `function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
    );
    return (
    <ul>{listItems}</ul>
    );
    }`
            },
            {
              title: 'Forms',
              content: [
                '• Handle form data with controlled components',
                '• Use the value attribute and an onChange event handler to manage form elements'
              ],
              example: `class NameForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};
    }

    handleChange = (event) => {
    this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
    }
    }`
            }
          ]
        },
        {
          title: 'React Hooks',
          content: 'Explore the power of React Hooks.',
          sections: [
            {
              title: 'useEffect',
              content: [
                '• Perform side effects in function components',
                '• Runs after every render by default',
                '• Can specify dependencies to control when effect runs'
              ],
              example: `import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
            },
            {
                title: 'useState',
                content: [
                  '• Add state to function components',
                  '• Returns current state value and a function to update it',
                  '• Can pass an initial state value'
                ],
                example: `import React, { useState, useEffect } from 'react';
  
  function Example() {
    const [count, setCount] = useState(0);
    `
              },
                {
                    title: 'useContext',
                    content: [
                    '• Share data with deeply nested components',
                    '• Avoid prop drilling',
                    '• Update context value with a provider'
                    ],
                    example: `import React, { useContext } from 'react';
                
                    const ThemeContext = React.createContext('light');

                    function App() {
                        return (
                            <ThemeContext.Provider value="dark">
                            <Toolbar />
                            </ThemeContext.Provider>
                        );
                        }
                    `
                },
                {
                    title: 'useReducer',
                    content: [
                      '• Manage complex state logic in function components',
                      '• Similar to Redux reducers',
                      '• Returns the current state and a dispatch function'
                    ],
                    example: `import React, { useReducer } from 'react';
                    
                    const initialState = { count: 0 };

                    function reducer(state, action) {
                        switch (action.type) {
                            case 'increment':
                            return { count: state.count + 1 };
                            case 'decrement':
                            return { count: state.count - 1 };
                            default:
                            throw new Error();
                        }
                        }

                    function Counter() {
                        const [state, dispatch] = useReducer(reducer, initialState);
                    
                        return (
                            <>
                            Count: {state.count}
                            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                            </>
                        );
                    }
                    `
                }
          ]
        },
        {
          title: 'React Router',
          content: 'Learn how to navigate between different parts of your application.',
          sections: [
            {
              title: 'Basic Routing',
              content: [
                '• Use BrowserRouter component to wrap your application',
                '• Use Route component to define routes',
                '• Use Link component to navigate between routes'
              ],
              example: `import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
            </div>
        </Router>   

    );

}`

            },
            {
              title: 'Nested Routes',
              content: [
                '• Nest routes within other routes',
                '• Use the match object to access URL parameters'
              ],
              example: `import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    );
}
    
function Topics({ match }) {

    return (
    
    
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={\`\${match.url}/rendering\`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={\`\${match.url}/components\`}>Components</Link>
                </li>
                <li>
                    <Link to={\`\${match.url}/props-v-state\`}>Props v. State</Link>
                </li>
            </ul>
            <Route path={\`\${match.path}/:topicId\`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}
`
            },
            {
              title: 'Programmatic Navigation',
              content: [
                '• Use the useHistory hook to navigate programmatically',
                '• Push a new entry onto the history stack'
              ],
              example: `import React from 'react';
import { useHistory } from 'react-router-dom';

function HomeButton() {
    let history = useHistory();

    function handleClick() {
        history.push('/home');
    }

    return (
        <button type="button" onClick={handleClick}>
            Go home
        </button>
    );
}`
            }
        
          ]
        },
        {
          title: 'Redux',
          content: 'Manage application state with Redux.',
          sections: [
            {
              title: 'Actions',
              content: [
                '• Plain objects that represent what happened',
                '• Must have a type property that indicates the type of action'
              ],
              example: `const ADD_TODO = 'ADD_TODO';

const action = {
    type: ADD_TODO,
    text: 'Build my first Redux app'
};`
            },
            {
              title: 'Reducers',
              content: [
                '• Specify how the application state changes in response to actions',
                '• Must be pure functions that return the next state'
              ],
              example: `function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    }
    return state;
}`
            },
            {
              title: 'Store',
              content: [
                '• Holds the application state',
                '• Allows access to state via getState()',
                '• Allows state to be updated via dispatch(action)'
              ],
              example: `import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);`
            },
            {
              title: 'Connect',
              content: [
                '• Connects a React component to the Redux store',
                '• Injects state and action creators as props'
              ],
              example: `import { connect } from 'react-redux';
import { addTodo } from './actions';

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);`
            }
          ]
        },
        

      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-purple-500 mb-8 pb-2">
        React Tutorial
      </h1>

      {reactTutorials.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <div className="flex items-center mb-4">
            {/* <div className="text-blue-400 mr-2">
              {category.icon}
            </div>
            <h2 className="text-2xl font-bold text-white">{category.category}</h2> */}
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

export default ReactTutorial;
