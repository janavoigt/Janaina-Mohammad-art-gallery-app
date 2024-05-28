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
const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  position: center;
  padding: 5px;
  color: ${({ $isActive }) => ($isActive ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export default function Spotlight({ image, artist, slug }) {
  return (
    <>
      <Container>
        <ImageContainer>
          <FavoriteButton slug={slug} />
          <StyledImage
            src={image}
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={400}
            height={400}
          />
        </ImageContainer>
        <h3>{artist}</h3>
        <StyledLink href={`art-pieces/${slug}`}>Details</StyledLink>
      </Container>
    </>
  );
}
