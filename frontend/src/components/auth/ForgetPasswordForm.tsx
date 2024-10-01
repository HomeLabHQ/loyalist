import { useNavigate } from 'react-router-dom';
import { Button, Container, Paper, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useAuthPasswordForgetCreateMutation } from '@/redux/api';

export default function ForgetPasswordForm() {
  const [create] = useAuthPasswordForgetCreateMutation();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: '',
    },
  });
  const onFinish = (values: { email: string }) => {
    create({ forgetPasswordRequest: { email: values.email } })
      .unwrap()
      .then(() => {
        notifications.show({
          title: 'Success',
          message: 'Request sent to your email',
          color: 'green',
        });
        navigate('/login');
      })
      .catch((error) => {
        notifications.show({ title: 'Error', message: error.data.detail, color: 'red' });
      });
  };
  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Text> Enter your account email to receive password reset instructions</Text>
        <form onSubmit={form.onSubmit((values) => onFinish(values))}>
          <TextInput required label="Enter your email" {...form.getInputProps('email')} />
          <Button m="md" type="submit">
            Send reset instructions
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
