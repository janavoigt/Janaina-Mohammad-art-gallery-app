import { create } from "zustand";

export const useArtPiecesStore = create((set) => ({
  artPieces: [],
  setArtPieces: (pieces) => set({ artPieces: pieces }),
}));
