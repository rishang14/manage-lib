// store/uiStore.ts
import { DialogState } from "@/common/types";
import { create } from "zustand";

type TabType = "dashboard" | "shared" | "my-libraries";

interface QueryState {
  tab: TabType;
  search: string;
  setQueryValues: <K extends "tab" | "search">(
    key: K,
    value: QueryState[K]
  ) => void;
}


export const useDialogstore = create<DialogState>((set) => ({
  isDialogOpen: false,
  setIsdialogOpen:(value)=> set({isDialogOpen:value})
}));


export const useQueryStore = create<QueryState>((set) => ({
  tab: "dashboard",
  search: "",
  setQueryValues: (key, value) => set({ [key]: value }),
}));

