import { Group, Button } from '@mantine/core';
import classes from './Footer.module.css';
import { SocialLinks } from '@/settings/constants';

export function Footer() {
  const items = SocialLinks.map((link) => (
    <Button component="a" href={link.url} leftSection={<link.icon />} size="xs" key={link.label}>
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
