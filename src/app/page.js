import { Button, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <main style={{ padding: 5 }}>
      <Title>Hello from Mantine UI</Title>
      <Button mt="md" color="blue">
        Click me
      </Button>
    </main>
  );
}
