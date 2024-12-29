import { User } from '../types/user';

// Mock database of users
const users: Record<string, User> = {};

export const AuthService = {
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const user = users[email] || {
      id: Object.keys(users).length + 1,
      name: email.split('@')[0],
      email,
      role: email.includes('admin') ? 'admin' : email.includes('agent') ? 'agent' : 'client',
    };

    return user;
  },

  register: async (
    email: string,
    password: string,
    name: string,
    role: 'client' | 'agent'
  ): Promise<User> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    if (users[email]) {
      throw new Error('User already exists');
    }

    const user: User = {
      id: String(Object.keys(users).length + 1),
      email,
      name,
      role,
    };

    users[email] = user;
    return user;
  },
};