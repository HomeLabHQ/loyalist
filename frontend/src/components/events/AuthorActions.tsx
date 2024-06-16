import { ActionIcon, Button, Group, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { EventRead, useEventsDestroyMutation } from '@/redux/api';

export default function AuthorActions(props: Readonly<{ event: EventRead }>) {
  const [opened, { close, open }] = useDisclosure(false);
  const [destroy] = useEventsDestroyMutation();
  const navigate = useNavigate();

  return (
    <Group>
      <ActionIcon
        size="xs"
        onClick={() => {
          navigate(`/events/${props.event.id}`);
        }}
      >
        <IconEdit />
      </ActionIcon>
      <Popover width={200} position="bottom" shadow="md" opened={opened}>
        <Popover.Target>
          <ActionIcon size="xs" color="red" onClick={open}>
            <IconTrash />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Group>
            <Text size="xs">Are you sure you want to delete this event?</Text>
            <Button
              size="xs"
              color="red"
              onClick={() => {
                destroy({ id: Number(props.event?.id) });
              }}
            >
              Yes
            </Button>
            <Button size="xs" onClick={close}>
              No
            </Button>
          </Group>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
