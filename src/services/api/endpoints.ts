/**
 * Single source of truth for API route paths.
 * Keeps magic strings out of individual service files.
 */
export const endpoints = {
  users: {
    list: "/users",
    detail: (id: string) => `/users/${id}`,
  },
} as const;
