'use client';

import { useEffect, useState } from 'react';
import { SimpleGrid, Loader } from '@mantine/core';
import { JobCard } from './JobCard';
import { jobData } from '@/data/jobs';

export function JobListings({ filters = {}, refresh }: { filters?: Record<string, any>, refresh?: number }) {
  const [jobs, setJobs] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const params = new URLSearchParams(filters).toString();
      const res = await fetch(`/api/jobs${params ? `?${params}` : ''}`);
      const data = await res.json();
      console.log(data);
      setJobs(data);
    };
    fetchJobs();
  }, [JSON.stringify(filters), refresh]);

  if (jobs === null) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}><Loader size="lg" /></div>;
  }

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
      spacing="lg"
      verticalSpacing="lg"
    >
      {/* For meeting the figma design, I have added the dummy data to the jobData array to the jobData.ts file */}
      {
        jobData.map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))
      }
      {jobs.length > 0 ? jobs.map((job: any) => (
        <JobCard key={job.id} job={job} />
      )) : jobData.map((job: any) => (
        <JobCard key={job.id} job={job} />
      ))}
    </SimpleGrid>
  );
}