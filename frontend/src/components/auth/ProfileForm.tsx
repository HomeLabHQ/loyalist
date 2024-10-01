import { useState } from 'react';
import { IconLock } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  Container,
  Fieldset,
  Grid,
  Group,
  Image,
  Modal,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import PasswordChangeForm from '@/components/auth/PasswordChangeForm';
import {
  PatchedUserRequest,
  useAuthProfilePartialUpdateMutation,
  useFileCleanupCreateMutation,
  useImageUploadCreateMutation,
  UserRead,
} from '@/redux/api';

export default function ProfileForm(props: Readonly<{ user: UserRead }>) {
  const [update] = useAuthProfilePartialUpdateMutation();
  const [createImage] = useImageUploadCreateMutation();
  const [cleanup] = useFileCleanupCreateMutation();
  const [pendingImage, setPendingImage] = useState('');
  const navigate = useNavigate();
  const [placeholder, setPlaceholder] = useState(props.user?.avatar?.url);
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
          <form
            onSubmit={form.onSubmit((values) => {
              handleSubmit(values);
            })}
          >
            <Fieldset legend="Personal information">
              <Grid>
                <Grid.Col span={7}>
                  <Container py="md">
                    <TextInput mb="md" label="First Name" {...form.getInputProps('first_name')} />
                    <TextInput mb="md" label="Last Name" {...form.getInputProps('last_name')} />
                    <Tooltip
                      events={{
                        hover: !props.user.has_password,
                        focus: !props.user.has_password,
                        touch: !props.user.has_password,
                      }}
                      label="You can't  change your email if you don't have a password(logged via OAuth providers)"
                    >
                      <TextInput
                        label="Your email"
                        placeholder="Your email"
                        {...form.getInputProps('email')}
                        disabled={!props.user.has_password}
                      />
                    </Tooltip>
                  </Container>
                </Grid.Col>
                <Grid.Col span={5}>
                  <Dropzone
                    accept={IMAGE_MIME_TYPE}
                    onDrop={(file) => {
                      createImage({
                        body: file[0],
                      })
                        .unwrap()
                        .then((data) => {
                          if (pendingImage) {
                            cleanup({ imageUploadRequest: { name: pendingImage } }).unwrap();
                          }
                          setPendingImage(data.name);
                          form.setValues({ avatar: data });
                          setPlaceholder(data.url);
                        });
                    }}
                  >
                    <Text ta="center">Profile picture</Text>
                  </Dropzone>
                  {placeholder && <Image src={placeholder} />}
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
          <Group py="md" justify="end">
            <Button mb="xs" onClick={() => handleSubmit(form.values)}>
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
