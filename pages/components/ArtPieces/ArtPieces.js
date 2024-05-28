import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { useArtPiecesStore } from "@/stores/userPiecesStores";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  li {
    width: 30rem;
    min-width: 10rem;
    height: 30rem;
  }
`;

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
          />
        </li>
      ))}
    </List>
  );
}
