import { apiClient } from "@/services/api/client";
import { endpoints } from "@/services/api/endpoints";
import type { User } from "@/types";

/**
 * Resource-level service: the layer components/hooks call into.
 * Mirrors the "services" layer in the paired FastAPI backend template -
 * it owns the shape of a request/response for a given resource.
 */
export const userService = {
  async getUsers(): Promise<User[]> {
    const { data } = await apiClient.get<User[]>(endpoints.users.list);
    return data;
  },

  async getUserById(id: string): Promise<User> {
    const { data } = await apiClient.get<User>(endpoints.users.detail(id));
    return data;
  },
};
