import GlobalStyle from "../styles";
import useSWR from "swr";
import { useArtPiecesStore } from "@/stores/pieces";
import { useEffect } from "react";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error("failed");
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const setArtPieces = useArtPiecesStore((state) => state.setArtPieces);
  // if (data) {
  useEffect(() => {
    setArtPieces(data);
  }, [data]);
  // }

  if (error) return <div>{error.message}</div>;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
