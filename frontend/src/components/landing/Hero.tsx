import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Grid,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconBrandGithub, IconCheck } from '@tabler/icons-react';
import shopping from '@/assets/shopping.svg';

export function Hero() {
  const navigate = useNavigate();
  return (
    <Container size="lg">
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Title>
            A <span>modern</span> Loyalty cards <br /> management app
          </Title>
          <Text c="dimmed" mt="md">
            With our app, you can easily scan and store all your loyalty cards, points, and rewards
            in one convenient location on your phone. No more fumbling through your wallet or
            forgetting your cards at home - everything you need is right at your fingertips.
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
              <b>Any type of codes</b> – Supports various type of codes(QR, barcode, etc.)
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – Loyalty cards management app is free and open source,
              and hosted for your convenience by me
            </List.Item>
            <List.Item>
              <b>Dark mode support</b>
            </List.Item>
            <List.Item>
              <b>One click login</b> - Login via Google, LinkedIn or the old school way with email
            </List.Item>
          </List>
          <Group mt={30}>
            <Button radius="xl" size="md" onClick={() => navigate('/login')}>
              Signup
            </Button>
            <Button
              rightSection={<IconBrandGithub />}
              component="a"
              href="https://github.com/HomeLabHQ/loyalist"
              radius="xl"
              size="md"
            >
              Source code
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Image src={shopping} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
