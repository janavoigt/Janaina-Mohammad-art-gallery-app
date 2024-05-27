import { useRouter } from "next/router";
import { useArtPiecesStore } from "@/stores/userPiecesStores";
import Image from "next/image";
import ArtPieceDetails from "../components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage() {
  const router = useRouter();

  const { slug } = router.query;

  const artPieces = useArtPiecesStore((state) => state.artPieces);
  if (artPieces === undefined || artPieces.length === 0)
    return <h1>{"Loading"}</h1>;

  const foundPiece = artPieces.find((piece) => piece.slug === slug);

  const { imageSource, name, artist, year, genre, colors } = foundPiece;

  return (
    <ArtPieceDetails
      title={name}
      image={imageSource}
      artist={artist}
      year={year}
      genre={genre}
      colors={colors}
      onBack={() => router.back()}
    />
  );
}
