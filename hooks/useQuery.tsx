import { create } from "zustand";

export interface useQueryInterface {
    Query: string;
    setQuery: (query: string) => void;
}

const useQuery = create<useQueryInterface>((set) => ({
    Query: "",
    setQuery: (query: string) => set(() => ({ Query: query })),
}))

export default useQuery