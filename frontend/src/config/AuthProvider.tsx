import { Navigate, useNavigate } from 'react-router-dom';
import { useStateSelector } from '../hooks/useState';

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const { isAuthenticated } = useStateSelector((state) => state.auth);

  // const navigate = useNavigate();

  // if (!isAuthenticated) navigate('login');

  return (
    <>
      {!isAuthenticated && <Navigate to={'login'} replace />}
      {children}
    </>
  );
};
