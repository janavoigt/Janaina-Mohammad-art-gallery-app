import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  display: grid;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`;

const Title = styled.h2`
  margin: 20px 0;
  text-align: center;
`;

export default function Comments({ comments }) {
  return (
    <Section>
      <Title>Comments</Title>
      <List role="list">
        {comments?.map((comment, index) => {
          return (
            <li key={index}>
              <p>
                {Date(comment.timestamp).toLocaleString()}: {comment.comment}
              </p>
            </li>
          );
        })}
      </List>
    </Section>
  );
}
