import { useArtPiecesStore } from "@/stores/userPiecesStores";

export default function FavoriteButton({ slug }) {
  const buttonFavorite = useArtPiecesStore((state) => state.onToggleFavorite);

  return (
    <button type="button" onClick={() => buttonFavorite(slug)}>
      Favorite
    </button>
  );
}
