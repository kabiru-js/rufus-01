import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthSession, UserProfile } from '../types/auth';
import { mockCurrentUser } from '../mocks/users';

interface AuthContextType extends AuthSession {
  login: (email: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (data: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<AuthSession>({
    user: mockCurrentUser,
    token: 'jwt_mock_token_xyz_8829',
    isAuthenticated: true,
  });

  const login = async (email: string): Promise<boolean> => {
    await new Promise((res) => setTimeout(res, 400));
    setSession({
      user: { ...mockCurrentUser, email },
      token: 'jwt_mock_token_new_session',
      isAuthenticated: true,
    });
    return true;
  };

  const logout = () => {
    setSession({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  };

  const updateUser = (data: Partial<UserProfile>) => {
    if (!session.user) return;
    setSession((prev) => ({
      ...prev,
      user: prev.user ? { ...prev.user, ...data } : null,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...session, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
