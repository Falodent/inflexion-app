import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  isComplete: boolean;
  setIsComplete: (state: boolean) => void;
}

export const useScrollingStore = create<Store>()(
  persist(
    (set) => ({
      isComplete: false,
      setIsComplete: (value: boolean) => set({ isComplete: value }),
    }),
    {
      name: "scroll-store",
    }
  )
);
