import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <FavoriteButton />
      <Image src={image} alt="" width={300} height={300} />
      <h3>Artist: {artist}</h3>
    </>
  );
}
