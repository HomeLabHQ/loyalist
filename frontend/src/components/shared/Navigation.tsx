import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navigation.module.css';

const links = [{ link: '/home', label: 'Home' }];

export function Navigation() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
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
