import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <article>
        <h2>{title}</h2>
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
