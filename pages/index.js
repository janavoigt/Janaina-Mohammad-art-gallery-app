import useSWR from "swr";
import ArtPieces from "./components/ArtPieces";
import Spotlight from "./components/Spotlight";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error("failed");
  }
  return await response.json();
};

export default function HomePage() {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);

  function getRandomArtPieces(artPieces) {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(artPieces.length);
    const randomNumber = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );

    return artPieces[randomNumber];
  }

  const randomArtPieces = getRandomArtPieces(data);

  return (
    <>
      <Spotlight
        image={randomArtPieces.imageSource}
        artist={randomArtPieces.artist}
      />
      <ArtPieces pieces={data} />
    </>
  );
}
