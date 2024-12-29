import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { AuthContainer } from './components/auth/AuthContainer';
import { useAuth } from './contexts/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    window.location.href = '/login';
    return null;
  }

  return <>{children}</>;
};

function App() {
  const path = window.location.pathname;

  const renderContent = () => {
    switch (path) {
      case '/login':
        return <AuthContainer />;
      case '/dashboard':
        return (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        );
      default:
        return <Home />;
    }
  };

  return (
    <AuthProvider>
      {renderContent()}
    </AuthProvider>
  );
}

export default App;