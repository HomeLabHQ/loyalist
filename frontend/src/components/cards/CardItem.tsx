import { IconBarcode } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Badge, Box, Button, Card, Group, Text } from '@mantine/core';
import { AppRoute } from '@/constants';
import { BaseLoyaltyCardRead } from '@/redux/api';
import classes from './CardItem.module.css';

export default function CardItem(props: Readonly<{ card?: BaseLoyaltyCardRead }>) {
  const navigate = useNavigate();
  return (
    <Box>
      {props.card ? (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section component="a" />
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{props.card?.title}</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      ) : (
        <Card withBorder className={classes.blankCardWrapper}>
          <Card.Section component="a" />
          <Group justify="space-between" mt="md" mb="xs">
            <IconBarcode />
          </Group>
          <Button
            color="blue"
            mt="md"
            radius="md"
            onClick={() => navigate(AppRoute.AddCard, { relative: 'path' })}
          >
            Add new card
          </Button>
        </Card>
      )}
    </Box>
  );
}
