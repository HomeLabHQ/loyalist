import { Button, Group } from '@mantine/core';
import { SocialLinks } from '@/constants';
import classes from './Footer.module.css';

export default function Footer() {
  const items = SocialLinks.map((link) => (
    <Button
      component="a"
      href={link.url}
      target="_blank"
      leftSection={<link.icon />}
      size="xs"
      key={link.label}
    >
      {link.label}
    </Button>
  ));
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>Made with ❤️ by Korol Oleksandr</Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          {items}
        </Group>
      </div>
    </div>
  );
}
