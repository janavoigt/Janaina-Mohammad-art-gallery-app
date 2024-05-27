import { useRouter } from "next/router";
import { useArtPiecesStore } from "@/stores/pieces";
import Image from "next/image";
import ArtPieceDetails from "../components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage() {
  const router = useRouter();

  const { slug } = router.query;

  const artPieces = useArtPiecesStore((state) => state.artPieces);
  if (artPieces === undefined || artPieces.length === 0)
    return <h1>{"Loading"}</h1>;

  const foundPiece = artPieces.find((piece) => piece.slug === slug);

  const { imagesource, name, artist, year, genre } = foundPiece;

  return (
    <ArtPieceDetails
      title={name}
      image={imagesource}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
