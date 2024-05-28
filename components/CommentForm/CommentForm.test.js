import { fireEvent, render, screen } from "@testing-library/react";
import CommentForm from "./CommentForm";

test("Renders form with the texarea, label and submit button", () => {
  render(<CommentForm />);

  const form = screen.getByRole("form");
  const textarea = screen.getByLabelText("Message:");
  expect(form).toContainElement(textarea);

  const button = screen.getByText("Send");
  expect(button).toHaveAttribute("type", "submit");
});
