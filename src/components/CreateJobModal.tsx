'use client';

import {
  Modal,
  TextInput,
  Textarea,
  Select,
  NumberInput,
  Button,
  Stack,
  Group,
  Title,
  Text,
  MultiSelect,
  Switch,
  FileInput,
  Grid,
  Box,
  Loader,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import {
  IconCheck,
} from '@tabler/icons-react';
import classes from './CreateJobModal.module.css';
import { useState } from 'react';

interface CreateJobModalProps {
  opened: boolean;
  onClose: () => void;
  onJobCreated?: () => void;
}

export function CreateJobModal({ opened, onClose, onJobCreated }: CreateJobModalProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      jobTitle: '',
      company: '',
      location: '',
      jobType: '',
      salaryMin: '',
      salaryMax: '',
      applicationDeadline: '',
      description: '',
    },
    validate: {
      jobTitle: (value) => (value.length < 2 ? 'Job title must have at least 2 characters' : null),
      company: (value) => (value.length < 2 ? 'Company name must have at least 2 characters' : null),
      location: (value) => (value ? null : 'Please select a location'),
      jobType: (value) => (value ? null : 'Please select a job type'),
      description: (value) => (value.length < 10 ? 'Description must have at least 10 characters' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Failed to create job');
      notifications.show({
        title: 'Job Posted Successfully!',
        message: 'Your job listing has been created and is now live.',
        color: 'green',
        icon: <IconCheck size={16} />,
      });
      form.reset();
      if (onJobCreated) onJobCreated();
      onClose();
    } catch (err) {
      notifications.show({
        title: 'Error',
        message: 'Failed to create job',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="lg"
      centered
      withCloseButton={false}
      classNames={{
        content: classes.modalContent,
        header: classes.modalHeader,
        body: classes.modalBody,
      }}
    >
      <div className={classes.modalHeader}>
        <Title order={2} component="div" className={classes.modalTitle}>
          Create Job Opening
        </Title>
      </div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className={classes.modalBody}>
          <Grid gutter="md">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Job Title"
                placeholder="Full Stack Developer"
                required
                className={classes.textInput}
                styles={{
                  input: {
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('jobTitle')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Company Name"
                placeholder="Amazon, Microsoft, Swiggy"
                required
                className={classes.textInput}
                styles={{
                  input: {
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('company')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="Location"
                placeholder="Choose Preferred Location"
                required
                className={classes.selectInput}
                data={[
                  'Mumbai, India',
                  'Delhi, India',
                  'Bangalore, India',
                  'Hyderabad, India',
                  'Chennai, India',
                  'Pune, India',
                  'Remote',
                ]}
                searchable
                styles={{
                  input: {
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('location')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="Job Type"
                placeholder="FullTime"
                required
                className={classes.selectInput}
                data={['FullTime', 'PartTime', 'Contract', 'Internship']}
                styles={{
                  input: {
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('jobType')}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Group grow>
                <NumberInput
                  label="Salary Range"
                  placeholder="₹ 0"
                  min={0}
                  className={classes.salaryInput}
                  styles={{
                    input: {
                      border: '1px solid black',
                    },
                  }}
                  {...form.getInputProps('salaryMin')}
                />
                <NumberInput
                  label=" "
                  placeholder="₹ 12,00,000"
                  min={0}
                  className={classes.salaryInput}
                  styles={{
                    input: {
                      border: '1px solid black',
                    },
                  }}
                  {...form.getInputProps('salaryMax')}
                />
              </Group>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                label="Application Deadline"
                placeholder="YYYY-MM-DD"
                type="date"
                className={classes.textInput}
                styles={{
                  input: {
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('applicationDeadline')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                label="Job Description"
                placeholder="Please share a description to let the candidate know more about the job role"
                minRows={6}
                required
                className={classes.textareaInput}
                styles={{
                  input: {
                    border: '1px solid black',
                  },
                }}
                {...form.getInputProps('description')}
              />
            </Grid.Col>
          </Grid>
        </div>
        <Group justify="space-between" mt="xl" className={classes.actionButtons} style={{ width: '100%' }}>
          <Button
            variant="outline"
            className={classes.cancelButton}
            type="button"
            onClick={() => {
              notifications.show({
                title: 'Job Saved',
                message: 'Job has been saved as draft.',
                color: 'green',
                icon: <IconCheck size={16} />,
              });
              onClose();
            }}
          >
            Save Draft
          </Button>
          <Button
            type="submit"
            className={classes.submitButton}
            disabled={loading}
          >
            {loading ? <Loader size="xs" color="white" /> : 'Publish'}
          </Button>
        </Group>
      </form>
    </Modal>
  );
}