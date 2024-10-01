import { ActionIcon, Group, Text } from '@mantine/core';
import image from '@/assets/app-logo.jpg';
import { Navigation } from '@/components/shared/Navigation';
import { UserMenu } from '@/components/shared/UserMenu';
import classes from './Header.module.css';

export default function Header() {
  return (
    <Group h="100%" justify="space-between">
      <Group>
        <ActionIcon
          component="a"
          variant="transparent"
          href="https://loyalist.dufran.org"
          size="lg"
          aria-label="Home page"
        >
          <img className={classes.logo} src={image} alt="logo" />
        </ActionIcon>
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: 'blue', to: 'green', deg: 90 }}
        >
          Loyalist
        </Text>
      </Group>
      <Navigation />
      <UserMenu />
    </Group>
  );
}
