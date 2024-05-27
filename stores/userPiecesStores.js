import { create } from "zustand";
import { produce } from "immer";

export const useArtPiecesStore = create((set, get) => ({
  artPieces: [],
  setArtPieces: (pieces) => set({ artPieces: pieces }),

  artPiecesInfo: [],
  setArtInfo: (pieces) => set({ artPiecesInfo: pieces }),

  onToggleFavorite: (slug) =>
    set((state) => {
      const favoritePiece = state.artPiecesInfo.find(
        (piece) => piece.slug === slug
      );
      if (favoritePiece === undefined) {
        return {
          artPiecesInfo: [
            ...state.artPiecesInfo,
            { slug: slug, isFavorite: true, comments: [] },
          ],
        };
      } else {
        const otherPieces = [
          ...state.artPiecesInfo.filter((piece) => piece.slug !== slug),
          { ...favoritePiece, isFavorite: !favoritePiece.isFavorite },
        ];
        return { artPiecesInfo: otherPieces };
      }
    }),

  getFavorite: () => {
    const favorites = get()
      .artPiecesInfo.filter((favorite) => favorite.isFavorite === true)
      .map((piece) => piece.slug);

    return get().artPieces.filter((piece) => favorites.includes(piece.slug));
  },
  addComment: (slug, comment, timestamp) => {
    set((state) => {
      const info = state.artPiecesInfo.find((piece) => piece.slug === slug);
      if (info) {
        const otherInfos = state.artPiecesInfo.filter(
          (piece) => piece.slug !== slug
        );
        return {
          artPiecesInfo: [
            ...otherInfos,
            {
              ...info,
              comments: [
                ...info.comments,
                { comment: comment, timestamp: timestamp },
              ],
            },
          ],
        };
      } else {
        return {
          artPiecesInfo: [
            ...state.artPiecesInfo,
            {
              slug: slug,
              isFavorite: false,
              comments: [{ comment: comment, timestamp: timestamp }],
            },
          ],
        };
      }
    });
  },
  getComments: (slug) => {
    const info = get().artPiecesInfo.find((piece) => piece.slug === slug);
    return info ? info.comments : [];
  },
}));
