import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <p>
        <Link href="/pages/index.js">Spotlight</Link>
      </p>
      <p>
        <Link href="/pages/art-pieces/index.js">Pieces</Link>
      </p>
    </>
  );
}
