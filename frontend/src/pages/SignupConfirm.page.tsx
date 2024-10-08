import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import LoginForm from '@/components/auth/LoginForm';
import { AppRoute } from '@/constants';
import classes from '@/pages/Login.module.css';
import { useAuthRegisterConfirmCreateMutation } from '@/redux/api';

export default function SignupConfirmPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const [confirm] = useAuthRegisterConfirmCreateMutation();

  useEffect(() => {
    if (token) {
      confirm({ signUpConfirmRequest: { token } })
        .unwrap()
        .then(() => {
          navigate(AppRoute.Home);
          notifications.show({ message: 'Confirmation successful', color: 'green' });
        })
        .catch((error) => {
          notifications.show({ message: JSON.stringify(error.data), color: 'red' });
        });
    }
  }, []);
  return (
    <div className={classes.content}>
      <LoginForm />
    </div>
  );
}
