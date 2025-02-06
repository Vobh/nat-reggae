import { create } from "zustand";

interface AddProductStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useAddProduct = create<AddProductStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useAddProduct;