import { create } from "zustand";

interface ScrollStore {
  scrollTo: (section: string) => void;
  registerSection: (id: string, ref: React.RefObject<HTMLDivElement>) => void;
  sections: Record<string, React.RefObject<HTMLDivElement>>;
}

export const useScrollStore = create<ScrollStore>((set, get) => ({
  sections: {},

  registerSection: (id, ref) => {
    set((state) => ({
      sections: { ...state.sections, [id]: ref },
    }));
  },

  scrollTo: (sectionId) => {
    const section = get().sections[sectionId];
    section?.current?.scrollIntoView({ behavior: "smooth" });
  },
}));
