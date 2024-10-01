import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AppRoute } from '@/constants';
import classes from './Navigation.module.css';

const links = [{ link: AppRoute.Home, label: 'Home' }];

export function Navigation() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Container size="md" className={classes.inner}>
      <Group gap={5} visibleFrom="xs">
        {items}
      </Group>
      <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
    </Container>
  );
}
