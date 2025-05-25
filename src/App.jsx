import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './react-router/Navbar';
import Home from './react-router/Home';
import About from './react-router/About';
import UserProfile from './react-router/userProfile';
import Login from './protected-routes/Login';
import Dashboard from './protected-routes/Dashboard';
import ProtectedRoute from './protected-routes/ProtectedRoute';
import { AuthProvider } from './protected-routes/AuthContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // state only

  const loginUser = () => {
    setIsLoggedIn(true);
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/login" element={<Login loginFunction={loginUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard logoutFunction={logoutUser} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
