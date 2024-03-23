import { JWTContext } from '@/context/jwt-context';
import { useContext } from 'react';

export const useAuth = () => {
  const context = useContext(JWTContext);

  if (!context) throw new Error('context must be use inside JWTProvider');

  return context;
};
