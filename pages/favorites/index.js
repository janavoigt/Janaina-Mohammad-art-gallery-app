import { useArtPiecesStore } from "@/stores/userPiecesStores";
import ArtPieces from "../components/ArtPieces/ArtPieces";

export default function FavoritePage() {
  const favoritesPieces = useArtPiecesStore((state) => state.getFavorite());
  return <ArtPieces pieces={favoritesPieces} />;
}
