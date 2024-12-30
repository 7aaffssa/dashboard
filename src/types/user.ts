export type UserRole = 'admin' | 'client' | 'intermediary';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}