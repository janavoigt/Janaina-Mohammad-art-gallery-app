import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

const testArtPieceDetails = {
  slug: "blue-and-red",
  artist: "Jung-Hua Lui",
  name: "Blue and Red",
  imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
  year: "2019",
  genre: "Abstract Painting",
  colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
  dimensions: { height: 2560, width: 1920, type: "jpg" },
};

test("render a image and artist for the random function", () => {
  render(
    <ArtPieceDetails
      title={testArtPieceDetails.name}
      image={testArtPieceDetails.imageSource}
      artist={testArtPieceDetails.artist}
      year={testArtPieceDetails.year}
      genre={testArtPieceDetails.genre}
    />
  );

  const image = screen.getByRole("img", {
    image: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
  });

  const title = screen.getByRole("heading");
  const year = screen.getByText(testArtPieceDetails.year);
  const genre = screen.getByText(testArtPieceDetails.genre);
  const artist = screen.getByText(testArtPieceDetails.artist);

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();

  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
});
