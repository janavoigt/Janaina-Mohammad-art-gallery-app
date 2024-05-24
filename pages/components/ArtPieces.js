import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <ul>
        {pieces?.map((piece) => (
          <li key={piece.slug}>
            <Image
              src={piece.imageSource}
              alt={piece.slu}
              width={300}
              height={300}
            />
            <h2>{piece.name}</h2>
            <h3>Artist: {piece.artist}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
