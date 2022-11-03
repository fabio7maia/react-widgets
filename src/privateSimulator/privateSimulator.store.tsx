import create from "zustand";

interface PrivateSimulatorStore {
  amount?: number;
  duration?: number;
  step: "formData" | "confirmationData";
  setAmount: (amount: number) => void;
  setDuration: (duration: number) => void;
  reset: () => void;
  onClickBack: () => void;
  onClickNext: () => void;
}

export const usePrivateSimulatorStore = create<PrivateSimulatorStore>(
  (set) => ({
    amount: undefined,
    duration: undefined,
    step: "formData",
    setAmount: (amount: number) => set((state) => ({ amount })),
    setDuration: (duration: number) => set((state) => ({ duration })),
    reset: () => set({ amount: undefined, duration: undefined }),
    onClickBack: () => set((state) => ({ step: "formData" })),
    onClickNext: () => set((state) => ({ step: "confirmationData" })),
  })
);
