import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/dashboard'
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;