import { useArtPiecesStore } from "@/stores/userPiecesStores";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtPiecesPage() {
  const pieces = useArtPiecesStore((state) => state.artPieces);

  return <ArtPieces pieces={pieces} />;
}
