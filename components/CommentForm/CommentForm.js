import styled from "styled-components";

const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 60%;
  text-align: center;
  margin-left: 10;
`;
const Label = styled.label`
  font-weight: bold;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  padding: 0.2rem;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  background-color: lightgray;
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
`;

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitComment(data);

    event.target.reset();
  }

  return (
    <Form onSubmit={handleSubmit} role="form">
      <Label htmlFor="comment">Message:</Label>
      <Textarea
        id="comment"
        name="comment"
        rows="5"
        cols="30"
        placeholder="Comment here"
      ></Textarea>

      <div>
        <Button type="submit" id="submit" value="SUBMIT">
          {" "}
          Send
        </Button>
      </div>
    </Form>
  );
}
