

import { create } from "zustand";

type LayoutState = {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
};

const useLayoutStore = create<LayoutState>((set) => ({
    isMobileMenuOpen: false,
    toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));

export default useLayoutStore
