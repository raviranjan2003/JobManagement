'use client';

import { useState } from 'react';
import { Container, Stack } from '@mantine/core';
import { Header } from '@/components/Header';
import { SearchSection } from '@/components/SearchSection';
import { JobListings } from '@/components/JobListings';

export default function HomePage() {
  const [jobRefresh, setJobRefresh] = useState(0);
  return (
    <div style={{ backgroundColor: '#fbfbff', minHeight: '100vh' }}>
      <Header onJobCreated={() => setJobRefresh((r) => r + 1)} />
      <SearchSection />
      <Container size="xl" py="xl">
        <Stack gap="xl">
          <JobListings refresh={jobRefresh} />
        </Stack>
      </Container>
    </div>
  );
}