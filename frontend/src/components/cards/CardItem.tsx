import { ActionIcon, Badge, Center, Grid, Group, Paper, Text, rem } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconCalendarPlus } from '@tabler/icons-react';
import { BaseLoyaltyCardRead } from '@/redux/api';

export default function CardItem(props: Readonly<{ card?: BaseLoyaltyCardRead }>) {
  const navigate = useNavigate();

  return (
    <Grid.Col span={{ base: 11, sm: 5, md: 3, lg: 3 }} style={{ minHeight: rem(120) }}>
      <Paper shadow="xs" p="xl" style={{ height: '100%' }}>
        {props.card ? (
          <>
            <Group>
              <Badge color={props.card?.title}></Badge>
              {props.card.title}
            </Group>
            <Text fz="lg" fw={500} mt="md">
              {props.card?.title}
            </Text>
            <Text></Text>
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
