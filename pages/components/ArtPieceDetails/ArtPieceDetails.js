import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import { useArtPiecesStore } from "@/stores/userPiecesStores";
import Comments from "../Comments/Comments";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
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
      </article>
      <button type="button">Back to the List</button>
      <Comments comments={comments} />
      <CommentForm
        onSubmitComment={(data) => addComment(slug, data.comment, Date.now())}
      />
    </>
  );
}
