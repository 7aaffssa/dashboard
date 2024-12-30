import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AuthLayout } from './components/AuthLayout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { useThemeStore } from './store/themeStore';

export default function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard/*"
              element={
                <AuthLayout>
                  <Dashboard />
                </AuthLayout>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}