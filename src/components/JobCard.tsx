'use client';

import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  Box,
  Image,
} from '@mantine/core';
import {
  IconBriefcase,
  IconMapPin,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import { Job } from '@/types/job';
import classes from './JobCard.module.css';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card
  className={classes.card}
  padding="lg"
  radius="xl"
  shadow="sm"
  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
>
  <Card.Section className={classes.cardHeader}>
    <Group justify="space-between" align="flex-start">
      <Box className={classes.logoContainer}>
        {job.logoContainerClass ? (
          <Box className={`${classes.logoWrapper} ${job.logoContainerClass}`}>
            <Image
              src={job.logo}
              alt={`${job.title} logo`}
              className={classes.logoImage}
            />
          </Box>
        ) : (
          <Image
            src={job.logo || "/Clip-path-group.png"}
            alt={`${job.title} logo`}
            className={classes.logoImageDirect}
          />
        )}
      </Box>
      <Badge
        color="blue"
        variant="light"
        radius="md"
        className={classes.timeBadge}
      >
        {job.postedTime || "24h Ago"}
      </Badge>
    </Group>
  </Card.Section>

  <Stack gap="md" mt="md" style={{ flex: 1 }}>
    <Text fw={700} size="xl" c="dark" className={classes.jobTitle}>
      {job.job_title || job.title}
    </Text>

    <Group gap="lg" className={classes.jobDetails}>
      <Group gap="xs">
        <IconBriefcase size={16} color="#5a5a5a" />
        <Text size="sm" c="dimmed" fw={500}>
          {"1-3 yr Exp"}
        </Text>
      </Group>

      <Group gap="xs">
        <IconMapPin size={16} color="#5a5a5a" />
        <Text size="sm" c="dimmed" fw={500}>
          {job.locationType || "Onsite"}
        </Text>
      </Group>

      <Group gap="xs">
        <IconCurrencyDollar size={16} color="#5a5a5a" />
        <Text size="sm" c="dimmed" fw={500}>
          {job.salary || `${job.salary_max / 100000}LPA` || "12LPA"}
        </Text>
      </Group>
    </Group>

    <Text size="sm" c="dimmed" fw={500} className={classes.description}>
      {job.description}
    </Text>

    <Box mt="auto">
      <Button
        fullWidth
        color="blue"
        radius="md"
        size="md"
        fw={700}
        className={classes.applyButton}
      >
        Apply Now
      </Button>
    </Box>
  </Stack>
</Card>

  );
}