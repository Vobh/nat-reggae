import { create } from "zustand";

interface AddAddressStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useAddAddress = create<AddAddressStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useAddAddress;