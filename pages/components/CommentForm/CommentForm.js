import Head from "next/head";

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitComment(data);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} role="form">
      <label htmlFor="comment">Message:</label>
      <textarea
        id="comment"
        name="comment"
        rows="5"
        cols="30"
        placeholder="Comment here"
      ></textarea>

      <div>
        <button type="submit" id="submit" value="SUBMIT">
          {" "}
          Send
        </button>
      </div>
    </form>
  );
}
