import classes from './Login.module.css';
import LoginForm from '@/components/auth/LoginForm';

export function LoginPage() {
  return (
    <div className={classes.content}>
      <LoginForm />
    </div>
  );
}
