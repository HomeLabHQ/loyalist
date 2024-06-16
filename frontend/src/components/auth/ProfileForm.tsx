import { useForm } from '@mantine/form';
import { Button, Card, Grid, Group, TextInput, Text, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { PatchedUserRequest, UserRead, useAuthProfilePartialUpdateMutation } from '@/redux/api';
import ImageUploader from '../shared/ImageUploader';

export default function ProfileForm(props: Readonly<{ user: UserRead }>) {
  const [update] = useAuthProfilePartialUpdateMutation();
  const navigate = useNavigate();
  const form = useForm<PatchedUserRequest>({
    initialValues: structuredClone(props.user),
  });
  const handleSubmit = (values: PatchedUserRequest) => {
    update({
      patchedUserRequest: values,
    })
      .unwrap()
      .then(() => {
        navigate('/dashboard/');
      })
      .catch((error) => {
        form.setErrors(error.data);
      });
  };

  return (
    <Grid justify="center">
      <Grid.Col span={6}>
        <form
          onSubmit={form.onSubmit((values) => {
            handleSubmit(values);
          })}
        >
          <Card withBorder shadow="sm" radius="md">
            <Group>
              <TextInput
                autoFocus
                mb="md"
                label="First Name"
                required
                {...form.getInputProps('first_name')}
              />
              <TextInput
                autoFocus
                mb="md"
                label="Last Name"
                required
                {...form.getInputProps('last_name')}
              />
            </Group>
            <Stack>
              <Text>Profile picture</Text>
              <ImageUploader
                setImage={form.setValues}
                field="avatar"
                placeholder={props.user.avatar?.url}
              />
            </Stack>
            <Button mb="xs" type="submit">
              Update Profile
            </Button>
            <Button mb="xs" color="red" onClick={() => navigate('/dashboard/')}>
              Cancel
            </Button>
          </Card>
        </form>
      </Grid.Col>
    </Grid>
  );
}
