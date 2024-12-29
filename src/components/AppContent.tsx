import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AuthContainer } from './auth/AuthContainer';
import { Dashboard } from '../pages/Dashboard';

export const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return user ? <Dashboard /> : <AuthContainer />;
};