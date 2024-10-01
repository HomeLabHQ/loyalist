import LoginForm from '@/components/auth/LoginForm';
import classes from './Login.module.css';

export function LoginPage() {
  return (
    <div className={classes.content}>
      <LoginForm />
    </div>
  );
}
