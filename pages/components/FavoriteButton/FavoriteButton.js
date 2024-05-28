import { useArtPiecesStore } from "@/stores/userPiecesStores";
import styled from "styled-components";

const Button = styled.button`
  position: relatives;
  left: 35%;
  text-align: center;
  z-index: 1;
  background-color: white transparent: 0.1;
  border: 3px solid black;
  border-radius: 25%;
  display: grid;
  align-itemns: center;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
`;

export default function FavoriteButton({ slug }) {
  const buttonFavorite = useArtPiecesStore((state) => state.onToggleFavorite);

  return (
    <Button type="button" onClick={() => buttonFavorite(slug)}>
      Favorite
    </Button>
  );
}
