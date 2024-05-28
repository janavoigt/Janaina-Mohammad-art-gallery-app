import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
`;
const Container = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
`;
const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function Spotlight({ image, artist, slug }) {
  return (
    <>
      <Container>
        <ImageContainer>
          <FavoriteButton slug={slug} />
          <StyledImage src={image} alt="" width={300} height={300} />
        </ImageContainer>
        <h3>{artist}</h3>
        <Link href={`art-pieces/${slug}`}>Info</Link>
      </Container>
    </>
  );
}
