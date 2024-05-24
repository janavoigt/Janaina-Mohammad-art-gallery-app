import useSWR from "swr";
import ArtPieces from "./components/ArtPieces";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error("failed");
  }
  return await response.json();
};

export default function HomePage() {
  const { data } = useSWR(`https://example-apis.vercel.app/api/art`, fetcher);

  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
