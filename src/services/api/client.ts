import axios from "axios";
import { env } from "@/config/env";

/**
 * Shared Axios instance for all API calls.
 * Keep raw HTTP concerns (base URL, headers, interceptors) here,
 * and keep per-resource logic in services/*.ts.
 */
export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10_000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized place to normalize/log errors before they reach the UI layer.
    return Promise.reject(error);
  },
);
