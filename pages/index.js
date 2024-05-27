import useSWR from "swr";
import ArtPieces from "./components/ArtPieces/ArtPieces";
import Spotlight from "./components/Spotlight/Spotlight";
import { useArtPiecesStore } from "@/stores/userPiecesStores";

export default function SpotlightPage() {
  function getRandomArtPieces(artPieces) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(artPieces.length);
    const randomNumber = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );

    return artPieces[randomNumber];
  }
  const artPieces = useArtPiecesStore((state) => state.artPieces);
  if (artPieces === undefined || artPieces.length === 0)
    return <h1>{"Loading"}</h1>;

  const artPiece = getRandomArtPieces(artPieces);

  return (
    <>
      <Spotlight
        image={artPiece.imageSource}
        artist={artPiece.artist}
        slug={artPiece.slug}
      />
    </>
  );
}
