import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import { useArtPiecesStore } from "@/stores/userPiecesStores";
import Comments from "../Comments/Comments";
import styled from "styled-components";

const Color = styled.li`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
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
    <>
      <article>
        <h2>{title}</h2>
        <FavoriteButton slug={slug} />
        <Image src={image} alt={title} width={300} height={300} />
        <ul>
          <li>{artist}</li>
          <li>{year}</li>
          <li>{genre}</li>
        </ul>
        {colors?.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </article>
      <button type="button" onClick={onBack}>
        Back to the List
      </button>
      <Comments comments={comments} />
      <CommentForm
        onSubmitComment={(data) => addComment(slug, data.comment, Date.now())}
      />
    </>
  );
}
