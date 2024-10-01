import { ReactNode, useMemo } from 'react';
import { AppShell } from '@mantine/core';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  const header = useMemo(() => <Header />, []);
  const footer = useMemo(() => <Footer />, []);
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header px="sm">{header}</AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>{footer}</AppShell.Footer>
    </AppShell>
  );
}
