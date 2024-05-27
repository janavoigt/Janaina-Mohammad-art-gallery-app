import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <>
      <Image src={image} alt="" width={300} height={300} />
      <h3>Artist: {artist}</h3>
    </>
  );
}
