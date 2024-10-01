import { IconCalendarPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Badge, Box, Center, Group, Text } from '@mantine/core';
import { BaseLoyaltyCardRead } from '@/redux/api';
import classes from './CardItem.module.css';

export default function CardItem(props: Readonly<{ card?: BaseLoyaltyCardRead }>) {
  const navigate = useNavigate();

  return (
    <Box>
      {props.card ? (
        <Box className={classes.cardWrapper}>
          <Group>
            <Badge>{props.card.title}</Badge>
          </Group>
          <Text fz="lg" fw={500} mt="md">
            {props.card?.title}
          </Text>
        </Box>
      ) : (
        <Box className={classes.blankCardWrapper}>
          <Center style={{ height: '100%' }}>
            <ActionIcon
              variant="filled"
              radius="xl"
              onClick={() => {
                navigate('/cards/new');
              }}
            >
              <IconCalendarPlus stroke={1.5} />
            </ActionIcon>
          </Center>
        </Box>
      )}
    </Box>
  );
}
