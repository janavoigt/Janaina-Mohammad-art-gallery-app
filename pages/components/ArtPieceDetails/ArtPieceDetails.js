import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
}) {
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
    </>
  );
}
