import { PasswordInput, Button, Group, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ChangePasswordRequest, useAuthPasswordUpdateCreateMutation } from '@/redux/api';

export default function PasswordChangeForm(props: Readonly<{ close: () => void }>) {
  const [update] = useAuthPasswordUpdateCreateMutation();
  const form = useForm<ChangePasswordRequest>({
    initialValues: { new_password: '', confirmed_password: '', old_password: '' },
  });
  const onFinish = (values: ChangePasswordRequest) => {
    update({ changePasswordRequest: { ...values } })
      .unwrap()
      .then(() => {
        notifications.show({
          title: 'Success',
          message: 'Password changed successfully',
          color: 'green',
        });
        props.close();
      })
      .catch((error) => {
        form.setErrors(error.data);
      });
  };

  return (
    <Container>
      <form
        onSubmit={form.onSubmit((values, event) => {
          event?.preventDefault();
          onFinish(values);
        })}
      >
        <PasswordInput
          required
          label="Your  current password"
          {...form.getInputProps('old_password')}
        />
        <PasswordInput
          withAsterisk
          label="Your new password"
          {...form.getInputProps('new_password')}
        />
        <PasswordInput
          withAsterisk
          label="Confirm your new password"
          {...form.getInputProps('confirmed_password')}
        />
        <Group>
          <Button my="md" type="submit">
            Change
          </Button>
          <Button color="red" my="md" onClick={() => props.close()}>
            Close
          </Button>
        </Group>
      </form>
    </Container>
  );
}
