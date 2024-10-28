import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual API call
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    };
    setUser(mockUser);
  };

  const loginWithGoogle = async () => {
    // Mock Google login - replace with actual Google OAuth
    const mockUser = {
      id: '2',
      name: 'Google User',
      email: 'user@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Google',
    };
    setUser(mockUser);
  };

  const loginWithGithub = async () => {
    // Mock GitHub login - replace with actual GitHub OAuth
    const mockUser = {
      id: '3',
      name: 'GitHub User',
      email: 'user@github.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GitHub',
    };
    setUser(mockUser);
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration - replace with actual API call
    const mockUser = {
      id: '1',
      name,
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        loginWithGoogle,
        loginWithGithub,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}