import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

export default function Spotlight({ image, artist, slug }) {
  return (
    <>
      <FavoriteButton slug={slug} />
      <Image src={image} alt="" width={300} height={300} />
      <h3>{artist}</h3>
      <Link href={`art-pieces/${slug}`}>Info</Link>
    </>
  );
}
