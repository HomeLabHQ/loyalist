import { createBrowserRouter, Navigate, RouterProvider, useLocation } from 'react-router-dom';
import NotFound from '@/components/shared/NotFound';
import { HomePage } from '@/pages/Home.page';
import LandingPage from '@/pages/Landing.page';
import { LoginPage } from '@/pages/Login.page';
import ProfilePage from '@/pages/Profile.page';
import SignupConfirmPage from '@/pages/SignupConfirm.page';
import SocialLoginPage from '@/pages/SocialLogin.page';
import { useAppSelector } from '@/redux/hooks';
import { AppRoute } from './constants';
import ForgetPasswordPage from './pages/ForgetPassword.page';
import ResetPasswordPage from './pages/ResetPassword.page';

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
const router = createBrowserRouter([
  {
    path: AppRoute.Base,
    element: <LandingPage />,
  },
  {
    path: AppRoute.Home,
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoute.Profile,
    element: <ProfilePage />,
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.SignUpConfirm,
    element: <SignupConfirmPage />,
  },
  {
    path: AppRoute.PasswordReset,
    element: <ResetPasswordPage />,
  },
  {
    path: AppRoute.PasswordForget,
    element: <ForgetPasswordPage />,
  },
  {
    path: AppRoute.SocialLogin,
    element: <SocialLoginPage />,
  },
  {
    path: AppRoute.AddCard,
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },

  { path: AppRoute.Any, element: <NotFound /> },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
