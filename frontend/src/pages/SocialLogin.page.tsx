import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { useAuthSocialJwtPairCreateMutation } from '@/redux/api';
import LoginForm from '@/components/auth/LoginForm';
import classes from '@/pages/Login.module.css';

export default function SocialLoginPage() {
  const location = useLocation();
  const { provider } = useParams();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  const [social] = useAuthSocialJwtPairCreateMutation();
  useEffect(() => {
    if (code && provider) {
      social({
        oAuth2InputRequest: {
          code,
          provider,
          redirect_uri: window.location.origin + window.location.pathname,
        },
      })
        .unwrap()
        .then(() => {
          notifications.show({ message: 'Confirmation successful', color: 'green' });
          navigate('/dashboard/');
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
