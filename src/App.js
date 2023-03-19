import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
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