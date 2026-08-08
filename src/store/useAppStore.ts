import { create } from "zustand";

interface AppState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

/**
 * Example global store using zustand. Swap for Redux Toolkit/Jotai/Context
 * if your project prefers a different state management approach - the
 * rest of the app only depends on this file's exported hook, not on zustand.
 */
export const useAppStore = create<AppState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
