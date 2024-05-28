import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import { useArtPiecesStore } from "@/stores/userPiecesStores";
import Comments from "../Comments/Comments";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 20%;
`;

const Color = styled.li`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 20%;
`;

const StyledImage = styled(Image)`
  object-fit: scale-down;
`;

const ArtContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`;
const Button = styled.button`
  background-color: lightgray;
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  colors,
  onBack,
}) {
  const comments = useArtPiecesStore((state) => state.getComments(slug));
  const addComment = useArtPiecesStore((state) => state.addComment);

  return (
    <Section>
      <h2>{title}</h2>
      <FavoriteButton slug={slug} />
      <StyledImage src={image} alt={title} width={500} height={500} />
      <List>
        <li>{artist} - </li>
        <li>{year} - </li>
        <li>{genre}</li>
      </List>
      <List>
        {colors?.map((color, index) => (
          <Color key={index} color={color} aria-label={color} />
        ))}
      </List>
      <ArtContainer>
        <Button type="button" onClick={onBack}>
          Back to the List
        </Button>
      </ArtContainer>
      <Comments comments={comments} />
      <CommentForm
        onSubmitComment={(data) => addComment(slug, data.comment, Date.now())}
      />
    </Section>
  );
}
