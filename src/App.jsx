import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TextEditor from './TextEditor';
import RegisterPage from './RegisterPage';
import Footer from './Footer';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import HTMLTutorial from './HTMLTutorial';
import CSSTutorial from './CSSTutorial';
import PythonTutorial from './PythonTutorial';
import NodeJSTutorial from './NodeJSTutorial';
import TailwindTutorial from './TailwindTutorial';
import ReactTutorial from './ReactTutorial';
import ColorPicker from './ColorPicker';
import Main from './MainPage'; 

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/editor" 
              element={
                <PrivateRoute> 
                  <TextEditor />
                </PrivateRoute>
              } 
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/html-tutorial" element={<HTMLTutorial />} />
            <Route path="/css-tutorial" element={<CSSTutorial />} />
            <Route path="/python-tutorial" element={<PythonTutorial />} />
            <Route path="/nodejs-tutorial" element={<NodeJSTutorial />} />
            <Route path="/tailwind-tutorial" element={<TailwindTutorial />} />
            <Route path="/react-tutorial" element={<ReactTutorial />} /> */}

            <Route path="/html-tutorial" element={<PrivateRoute><HTMLTutorial/></PrivateRoute>} />      
            <Route path="/css-tutorial" element={<PrivateRoute><CSSTutorial/></PrivateRoute>} />
            <Route path="/python-tutorial" element={<PrivateRoute><PythonTutorial/></PrivateRoute>} />
            <Route path="/nodejs-tutorial" element={<PrivateRoute><NodeJSTutorial/></PrivateRoute>} />
            <Route path="/tailwind-tutorial" element={<PrivateRoute><TailwindTutorial/></PrivateRoute>} />
            <Route path="/react-tutorial" element={<PrivateRoute><ReactTutorial/></PrivateRoute>} />  
            <Route path="/main" element={<PrivateRoute><Main/></PrivateRoute>} /> 
            <Route path="/color-picker" element={<ColorPicker/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </AuthProvider>
);

export default App;
