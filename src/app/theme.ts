import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    brand: [
      '#f0f4ff',
      '#e1ecff',
      '#bdd8ff',
      '#94c2ff',
      '#74b0ff',
      '#5ea5ff',
      '#52a0ff',
      '#428ce4',
      '#377dcc',
      '#2a6cb5',
    ],
    purple: [
      '#f8f0ff',
      '#e9d8ff',
      '#d0aeff',
      '#b580ff',
      '#a159ff',
      '#9640ff',
      '#9135ff',
      '#7f28e4',
      '#7020cc',
      '#6016b5',
    ],
  },
  primaryColor: 'brand',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    fontWeight: '700',
  },
});