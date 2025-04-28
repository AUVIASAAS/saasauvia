import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  role: UserRole | null;
}

const defaultContext: AuthContextType = {
  user: null,
  loading: true,
  login: async () => {},
  logout: () => {},
  isAuthenticated: false,
  role: null,
};

const AuthContext = createContext<AuthContextType>(defaultContext);

export const useAuth = () => useContext(AuthContext);

// Mock user data for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin da Clínica',
    email: 'admin@auvia.com',
    role: 'admin',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '2',
    name: 'Dr. João Silva',
    email: 'dr.joao@auvia.com',
    role: 'doctor',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '3',
    name: 'Maria Recepção',
    email: 'maria@auvia.com',
    role: 'receptionist',
    createdAt: new Date(),
    active: true,
  },
  {
    id: '4',
    name: 'Pedro Paciente',
    email: 'pedro@email.com',
    role: 'patient',
    createdAt: new Date(),
    active: true,
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('auviaUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock authentication - in a real app, this would be an API call
      const foundUser = mockUsers.find((u) => u.email === email);
      
      if (!foundUser) {
        throw new Error('Usuário não encontrado');
      }
      
      // In a real app, we would verify the password here
      // For demo, we'll just set the user
      setUser(foundUser);
      localStorage.setItem('auviaUser', JSON.stringify(foundUser));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auviaUser');
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    role: user?.role || null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};