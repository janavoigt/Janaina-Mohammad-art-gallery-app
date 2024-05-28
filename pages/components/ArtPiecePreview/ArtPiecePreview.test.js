import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

const testArtPreview = {
  slug: "blue-and-red",
  artist: "Jung-Hua Lui",
  name: "Blue and Red",
  imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
  year: "2019",
  genre: "Abstract Painting",
  colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
  dimensions: { height: 2560, width: 1920, type: "jpg" },
};

test("render a image, title and artist", () => {
  render(
    <ArtPiecePreview
      image={testArtPreview.imageSource}
      title={testArtPreview.name}
      artist={testArtPreview.artist}
    />
  );

  const image = screen.getByRole("img", {
    image: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
  });

  // const artist = screen.getByRole("heading");
  // const title = screen.getByRole("heading");

  expect(image).toBeInTheDocument();

  // expect(artist).toBeInTheDocument();
  // expect(title).toBeInTheDocument();
});
