import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <p>
        <Link href="/">Spotlight</Link>
      </p>
      <p>
        <Link href="/art-pieces">Pieces</Link>
      </p>
    </>
  );
}
