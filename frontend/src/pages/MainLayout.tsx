import { ReactNode } from 'react';
import { ActionIcon, AppShell, Group, Text } from '@mantine/core';
import image from '@/assets/app-logo.jpg';
import { Footer } from '@/components/shared/Footer';
import { Navigation } from '@/components/shared/Navigation';
import { UserMenu } from '@/components/shared/UserMenu';
import classes from './MainLayout.module.css';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header px="sm">
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
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
