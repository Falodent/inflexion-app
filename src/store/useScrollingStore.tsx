import { create } from "zustand";

interface Store {
  isScrolling: boolean;
  setIsScrolling: (state: boolean) => void;
}

export const useScrollingStore = create<Store>((set) => ({
  isScrolling: false,
  setIsScrolling: (value: boolean) => set({ isScrolling: value }),
}));
