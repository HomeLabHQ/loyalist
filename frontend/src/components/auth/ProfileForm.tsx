import { useForm } from '@mantine/form';
import { Button, Card, Grid, Group, TextInput, Text, Stack, Fieldset, Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { IconLock } from '@tabler/icons-react';
import { PatchedUserRequest, UserRead, useAuthProfilePartialUpdateMutation } from '@/redux/api';
import ImageUploader from '@/components/shared/ImageUploader';
import classes from './ProfileForm.module.css';
import PasswordChangeForm from '@/components/auth/PasswordChangeForm';

export default function ProfileForm(props: Readonly<{ user: UserRead }>) {
  const [update] = useAuthProfilePartialUpdateMutation();
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<PatchedUserRequest>({
    initialValues: structuredClone(props.user),
  });
  const handleSubmit = (values: PatchedUserRequest) => {
    update({
      patchedUserRequest: values,
    })
      .unwrap()
      .then(() => {
        navigate('/home/');
      })
      .catch((error) => {
        form.setErrors(error.data);
      });
  };

  return (
    <Grid justify="center">
      <Grid.Col span={6}>
        <Card withBorder shadow="sm" radius="md">
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          >
            Profile
          </Text>
          <Text lineClamp={4}></Text>
          <form
            onSubmit={form.onSubmit((values) => {
              handleSubmit(values);
            })}
          >
            <Fieldset legend="Personal information">
              <Grid>
                <Grid.Col span={6}>
                  <Group py="md">
                    <TextInput
                      autoFocus
                      mb="md"
                      label="First Name"
                      {...form.getInputProps('first_name')}
                    />
                    <TextInput
                      autoFocus
                      mb="md"
                      label="Last Name"
                      {...form.getInputProps('last_name')}
                    />
                  </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Stack>
                    <Text>Profile picture</Text>
                    <div className={classes.avatar}>
                      <ImageUploader
                        setImage={form.setValues}
                        field="avatar"
                        placeholder={props.user.avatar?.url}
                      />
                    </div>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Fieldset>
          </form>
          <Fieldset legend="Security">
            <Modal opened={opened} onClose={close} title="Password change" centered>
              <PasswordChangeForm close={close} />
            </Modal>
            <Button onClick={open}>
              <IconLock />
              Change password
            </Button>
          </Fieldset>
          <Group justify="end">
            <Button mb="xs" type="submit">
              Update Profile
            </Button>
            <Button mb="xs" color="red" onClick={() => navigate('/home/')}>
              Cancel
            </Button>
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
