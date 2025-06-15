'use client';

import {
  Container,
  Group,
  Button,
  Box,
  Anchor,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CreateJobModal } from './CreateJobModal';
import classes from './Header.module.css';

const links = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'Find Jobs' },
  { link: '#', label: 'Find Talents' },
  { link: '#', label: 'About us' },
  { link: '#', label: 'Testimonials' },
];

export function Header({ onJobCreated }: { onJobCreated?: () => void }) {
  const [opened, { open, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <Container size="lg" py="md">
        <Box className={classes.header}>
          <Group justify="space-between" align="center" h="100%">
            <Image
              src="/Clip-path-group.png"
              alt="Logo"
              w={44}
              h={45}
            />

            <Group gap={0} visibleFrom="sm">
              {items}
            </Group>

            <Button
              variant="gradient"
              gradient={{ from: 'purple.6', to: 'purple.8', deg: 180 }}
              radius="xl"
              size="md"
              fw={700}
              onClick={open}
            >
              Create Jobs
            </Button>
          </Group>
        </Box>
      </Container>

      <CreateJobModal opened={opened} onClose={close} onJobCreated={onJobCreated} />
    </>
  );
}