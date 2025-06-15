'use client';

import {
  Container,
  Paper,
  Group,
  TextInput,
  Select,
  Slider,
  Text,
  Box,
  Divider,
} from '@mantine/core';
import {
  IconSearch,
  IconMapPin,
  IconBriefcase,
} from '@tabler/icons-react';
import { useState } from 'react';
import classes from './SearchSection.module.css';

export function SearchSection() {
  const [salaryRange, setSalaryRange] = useState([50, 80]);

  return (
    <Container size="xl" py="xl">
      <Paper className={classes.searchContainer} p="lg" radius="md" shadow="sm">
        <Group gap="md" align="flex-end" wrap="nowrap">
          <TextInput
            placeholder="Search By Job Title, Role"
            leftSection={<IconSearch size={20} />}
            flex={1}
            size="md"
            className={classes.searchInput}
          />

          <Divider orientation="vertical" size="sm" className={classes.divider} />

          <Select
            placeholder="Preferred Location"
            leftSection={<IconMapPin size={20} />}
            data={['Remote', 'Onsite', 'Hybrid']}
            flex={1}
            size="md"
            className={classes.searchInput}
          />

          <Divider orientation="vertical" size="sm" className={classes.divider} />

          <Select
            placeholder="Job type"
            leftSection={<IconBriefcase size={20} />}
            data={['Full-time', 'Part-time', 'Contract', 'Freelance']}
            flex={1}
            size="md"
            className={classes.searchInput}
          />

          <Divider orientation="vertical" size="sm" className={classes.divider} />

          <Box flex={1} className={classes.salarySection}>
            <Group justify="space-between" mb="xs">
              <Text fw={700} size="sm" c="dark">
                Salary Per Month
              </Text>
              <Text fw={700} size="sm" c="dark">
                ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
              </Text>
            </Group>
            <Slider
              range
              value={salaryRange}
              onChange={setSalaryRange}
              min={10}
              max={200}
              step={5}
              size="sm"
              color="dark"
            />
          </Box>
        </Group>
      </Paper>
    </Container>
  );
}