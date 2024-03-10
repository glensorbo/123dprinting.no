import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useStateSelector } from '../hooks/useState';

export const AuthProvider = () => {
  const { isAuthenticated } = useStateSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  });

  return <Outlet />;
};
