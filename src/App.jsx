import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TextEditor from './TextEditor';
import RegisterPage from './RegisterPage';
import Footer from './Footer';
// import ContactPage from './ContactPage';
import LoginPage from './LoginPage';

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
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </AuthProvider>
);

export default App;
