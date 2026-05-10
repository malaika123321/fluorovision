import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import PhotoUpload from './pages/PhotoUpload';
import Results from './pages/Results';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import Tips from './pages/Tips';

import NotFound from './pages/NotFound';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Context
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ToastContainer theme="light" position="top-right" />
        <div style={{
          backgroundColor: '#f5f7fa',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/"           element={<Home />} />
              <Route path="/about"      element={<About />} />
              <Route path="/login"      element={<Login />} />
              <Route path="/register"   element={<Register />} />
              <Route path="/tips"       element={<Tips />} />
              

              {/* Protected Routes */}
              <Route path="/profile"    element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/quiz"       element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
              <Route path="/upload"     element={<ProtectedRoute><PhotoUpload /></ProtectedRoute>} />
              <Route path="/results"    element={<ProtectedRoute><Results /></ProtectedRoute>} />
              <Route path="/dashboard"  element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/chatbot"    element={<ProtectedRoute><Chatbot /></ProtectedRoute>} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;