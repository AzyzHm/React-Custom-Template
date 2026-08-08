/**
 * Centralized, typed access to environment variables.
 * Import this instead of reading `import.meta.env` directly across the app.
 */
export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000/api/v1",
  appName: import.meta.env.VITE_APP_NAME ?? "React Custom Template",
} as const;
