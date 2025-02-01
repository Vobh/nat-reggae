import { create } from "zustand";

interface SignupStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useSignup = create<SignupStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useSignup;