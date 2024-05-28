import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Caption = styled.figcaption`
  position: absolute;
  text-align: center;
  bottom: 0px;
  left: 0;
  width: 100%;
  color: black;
  padding: 0.1rem 0.3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  position: center;
  padding: 5px;
  margin-left: 45%;
  color: ${({ $isActive }) => ($isActive ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <Figure className="container-preview">
      <ImageContainer>
        <FavoriteButton slug={slug} />
        <Image src={image} alt={title} width={400} height={400} />
      </ImageContainer>
      <Caption id={`caption-${slug}`}>{`${artist}: ${title}`}</Caption>
      <StyledLink href={`art-pieces/${slug}`}>Details</StyledLink>
    </Figure>
  );
}
