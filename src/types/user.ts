export type UserRole = 'admin' | 'client' | 'agent';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Agent extends User {
  role: 'agent';
  listings: string[];
  clients: string[];
  commissionRate: number;
}

export interface Client extends User {
  role: 'client';
  favorites: string[];
  searches: string[];
  inquiries: string[];
}