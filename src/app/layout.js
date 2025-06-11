
import '@mantine/core/styles.css'; // Import Mantine styles
import { MantineProvider } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';

export const metadata = {
  title: 'My Mantine + Next.js App',
  description: 'Example with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
