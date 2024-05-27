import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { useArtPiecesStore } from "@/stores/pieces";

export default function ArtPieces() {
  const pieces = useArtPiecesStore((state) => state.artPieces);
  if (pieces === undefined || pieces.length === 0) return <h1>{"Loading"}</h1>;

  return (
    <div>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        </li>
      ))}
    </div>
  );
}
