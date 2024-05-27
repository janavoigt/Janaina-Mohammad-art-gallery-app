import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <>
      <FavoriteButton slug={slug} />
      <Image src={image} alt={title} width={300} height={300} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <Link href={`art-pieces/${slug}`}>Info</Link>
    </>
  );
}
