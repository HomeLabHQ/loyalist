import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { LoginPage } from '@/pages/Login.page';
import SignupConfirmPage from '@/pages/SignupConfirm.page';
import SocialLoginPage from '@/pages/SocialLogin.page';
import LandingPage from '@/pages/Landing.page';
import { HomePage } from '@/pages/Home.page';
import ProfilePage from '@/pages/Profile.page';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup/confirm',
    element: <SignupConfirmPage />,
  },
  {
    path: '/social/:provider',
    element: <SocialLoginPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
