import {
  Button,
  Card,
  ColorPicker,
  DEFAULT_THEME,
  Grid,
  Group,
  Stack,
  Switch,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { DateInput } from '@mantine/dates';
import {
  EventRead,
  EventRequest,
  useEventsCreateMutation,
  useEventsPartialUpdateMutation,
} from '@/redux/api';
import formatDate from '@/hooks/formatDate';
import { defaultColor } from '@/settings/constants';

interface EventFormData extends Omit<EventRequest, 'date'> {
  date: Date;
}
export default function EventForm(props: Readonly<{ event?: EventRead }>) {
  const [create] = useEventsCreateMutation();
  const [update] = useEventsPartialUpdateMutation();
  const navigate = useNavigate();
  const form = useForm<EventFormData>({
    initialValues: props.event
      ? { ...structuredClone(props.event), date: new Date(props.event.date) }
      : {
          title: '',
          date: new Date(),
          is_public: false,
          description: '',
          color: defaultColor,
        },
  });
  const handleSubmit = (values: EventFormData) => {
    if (props.event) {
      update({
        id: props.event.id,
        patchedEventRequest: { ...values, date: formatDate(values.date) },
      })
        .unwrap()
        .then(() => {
          navigate('/dashboard/');
        })
        .catch((error) => {
          form.setErrors(error.data);
        });
    } else {
      create({ eventRequest: { ...values, date: formatDate(values.date) } })
        .unwrap()
        .then(() => {
          navigate('/dashboard/');
        })
        .catch((error) => {
          form.setErrors(error.data);
        });
    }
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
                label="Event title"
                required
                {...form.getInputProps('title')}
              />
              <Stack>
                Event label color
                <ColorPicker
                  withPicker={false}
                  swatches={[
                    ...DEFAULT_THEME.colors.red.slice(0, 7),
                    ...DEFAULT_THEME.colors.green.slice(0, 7),
                    ...DEFAULT_THEME.colors.blue.slice(0, 7),
                  ]}
                  {...form.getInputProps('color')}
                />
              </Stack>
            </Group>
            <Group>
              <DateInput
                mb="md"
                clearable
                label="Event date"
                {...{ ...form.getInputProps('date') }}
              />
            </Group>
            <Group>
              <Textarea label="Event description" {...form.getInputProps('description')} />
              <Switch mb="xs" {...form.getInputProps('is_public')} label="Make it public?" />
            </Group>
            <Group m="md">
              <Button mb="xs" type="submit">
                Save Event
              </Button>
              <Button mb="xs" color="red" onClick={() => navigate('/dashboard/')}>
                Cancel
              </Button>
            </Group>
          </Card>
        </form>
      </Grid.Col>
    </Grid>
  );
}
