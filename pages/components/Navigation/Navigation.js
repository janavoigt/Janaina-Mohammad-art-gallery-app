import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  color: ${({ $isActive }) => ($isActive ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 100%;
  margin: 0;
  align-items: center;
`;

export default function Navigation() {
  return (
    <nav>
      <List>
        <li>
          <StyledLink href="/">Spotlight</StyledLink>
        </li>
        <li>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </li>
        <li>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </li>
      </List>
    </nav>
  );
}
