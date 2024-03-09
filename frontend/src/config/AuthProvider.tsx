import { useStateSelector } from '../hooks/useState';
import { PageLayout } from '../features/layout/PageLayout';
import { Login } from '../components/Login';

export const AuthProvider = () => {
  const { isAuthenticated } = useStateSelector((state) => state.auth);

  return (
    <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && <PageLayout />}
    </>
  );
};
