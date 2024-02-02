// components/PrivateRoute.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from '@/redux/selectores';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const spotifyAccessToken = useSelector(getAuth);
  const router = useRouter();

  useEffect(() => {
    if (!spotifyAccessToken) {
      // Si no hay token, redirigir a la página de inicio de sesión
      router.replace('/');
    }
  }, [spotifyAccessToken, router]);

  // Renderizar el contenido solo si hay un token
  return spotifyAccessToken ? <>{children}</> : null;
};

export default PrivateRoute;
