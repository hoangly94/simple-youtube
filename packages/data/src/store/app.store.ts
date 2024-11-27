import { create } from "zustand";

interface AppStore {
  openSidebar: boolean;
  setSidebar: (value: boolean) => void;
}
export const useAppStore = create<AppStore>((set) => ({
  openSidebar: false,
  setSidebar: (value: boolean) => {
    set(() => ({ openSidebar: value }));
  },
}));
