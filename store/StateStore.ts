// store/uiStore.ts
import { DialogState } from "@/common/types";
import { create } from "zustand";



export const useDialogstore = create<DialogState>((set) => ({
  isDialogOpen: false,
  setIsdialogOpen:(value)=> set({isDialogOpen:value})
}));
