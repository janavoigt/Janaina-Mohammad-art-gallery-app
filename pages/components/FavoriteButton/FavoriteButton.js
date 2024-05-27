import { useArtPiecesStore } from "@/stores/userPiecesStores";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  const buttonFavorite = useArtPiecesStore((state) => state.onToggleFavorite);

  return (
    <button type="button" onClick={() => buttonFavorite(slug)}>
      Favorite
    </button>
  );
}
