import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Paper, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ResetPasswordRequest, useAuthPasswordResetCreateMutation } from '@/redux/api';

export default function ForgetPasswordForm() {
  const [create] = useAuthPasswordResetCreateMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const form = useForm<ResetPasswordRequest>({
    initialValues: {
      new_password: '',
      confirmed_password: '',
      token: token ?? '',
    },
  });
  const onFinish = (values: ResetPasswordRequest) => {
    create({ resetPasswordRequest: { ...values } })
      .unwrap()
      .then(() => {
        notifications.show({
          title: 'Success',
          message: 'Password successfully set',
          color: 'green',
        });
        navigate('/login');
      })
      .catch((error) => {
        form.setErrors(error.data);
        notifications.show({ message: JSON.stringify(error.data), color: 'red' });
      });
  };
  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text>Enter new password and confirmation</Text>
        <form onSubmit={form.onSubmit((values) => onFinish(values))}>
          <TextInput
            required
            leftSectionPointerEvents="initial"
            type="password"
            label="New password"
            {...form.getInputProps('new_password')}
          />
          <TextInput
            required
            type="password"
            label="New password confirmation"
            {...form.getInputProps('confirmed_password')}
          />

          <Button m="md" type="submit">
            Change password
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
