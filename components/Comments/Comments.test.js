import { render, screen } from "@testing-library/react";
import Comments from "./Comments";

const commentsTest = [
  {
    comment: "Comment 1",
    timestamp: Date.now(),
  },
  {
    comment: "Comment 2",
    timestamp: Date.now(),
  },
];

test("Renders both comments", () => {
  render(<Comments comments={commentsTest} />);

  const comments = screen.getAllByRole("listitem");
  expect(comments).toHaveLength(2);

  const firstComment = screen.getByText(commentsTest[0].comment, {
    exact: false,
  });
  expect(firstComment).toBeInTheDocument();

  const secondComment = screen.getByText(commentsTest[1].comment, {
    exact: false,
  });
  expect(secondComment).toBeInTheDocument();
});
