import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <Container p="lg" size="md">
      <div>
        <div>
          <Title>Remembrancer - event countdown app</Title>
          <Text c="dimmed" mt="md">
            Stay ahead and never miss an important moment again. Countdown to your upcoming events,
            big or small, with ease.
          </Text>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Any number of events</b> – Add any number of events
            </List.Item>
            <List.Item>
              <b>Social logins</b> – Login with Google or LinkedIn
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all source code are available on GitHub, so you can poke
              around and maybe suggest an feature
            </List.Item>
          </List>
          <Group mt={30}>
            <Link to="/login">
              <Button radius="xl" size="md">
                Get started
              </Button>
            </Link>
          </Group>
        </div>
        <Image />
      </div>
    </Container>
  );
}
