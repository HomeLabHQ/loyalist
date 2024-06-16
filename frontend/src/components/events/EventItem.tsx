import { ActionIcon, Badge, Center, Grid, Group, Paper, Text, rem } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconCalendarPlus } from '@tabler/icons-react';
import { EventRead } from '@/redux/api';
import formatDate from '@/hooks/formatDate';
import timeToEvent from '@/hooks/timeToEvent';
import { useAppSelector } from '@/redux/hooks';
import AuthorActions from './AuthorActions';

export default function EventItem(props: Readonly<{ event?: EventRead }>) {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Grid.Col span={{ base: 11, sm: 5, md: 3, lg: 3 }} style={{ minHeight: rem(120) }}>
      <Paper shadow="xs" p="xl" style={{ height: '100%' }}>
        {props.event ? (
          <>
            <Group>
              <Badge color={props.event?.color}>{formatDate(props.event?.date)}</Badge>
              {props.event.author.email === user?.email && <AuthorActions event={props.event} />}
            </Group>
            <Text fz="lg" fw={500} mt="md">
              {props.event?.title}
            </Text>
            <Text>
              {timeToEvent(props.event?.date) > 0
                ? `${timeToEvent(props.event?.date)} days left`
                : 'Happening today'}
            </Text>
          </>
        ) : (
          <Center style={{ height: '100%' }}>
            <ActionIcon
              variant="filled"
              radius="xl"
              onClick={() => {
                navigate('/events/new');
              }}
            >
              <IconCalendarPlus stroke={1.5} />
            </ActionIcon>
          </Center>
        )}
      </Paper>
    </Grid.Col>
  );
}
