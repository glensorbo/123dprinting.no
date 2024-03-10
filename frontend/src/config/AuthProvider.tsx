import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useStateSelector } from '../hooks/useState';

export const AuthProvider = () => {
  const { isAuthenticated } = useStateSelector((state) => state.auth);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/login') navigate('/login');
  });

  return <Outlet />;
};
