import { AppShell, Group, Text } from '@mantine/core';
import { ReactNode } from 'react';
import { UserMenu } from '@/components/shared/UserMenu';
import { Footer } from '@/components/shared/Footer';
import image from '@/assets/app-logo.png';
import classes from './MainLayout.module.css';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" justify="space-between">
          <Group>
            <img className={classes.logo} src={image} alt="logo" />
            <Text>Loyalist</Text>
          </Group>
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
