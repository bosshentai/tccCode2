import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuardProps } from '../../types/guard';
import { useAuth } from '@/hooks/use-auth';

export const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
};
