import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  color: ${({ $isActive }) => ($isActive ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-top: 3px solid black;
  }
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 20px;
`;

// const NavContainer = styled.nav`
//   bottom: 0;
//   display: flex;
//   text-align: center;
//   align-items: center;
//   border: solid 1px black;
//   border-radius: 5px;
//   background-color: lightgray;
// `;

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
