import Head from "next/head";

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitComment(data);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comments">Comment</label>
      <textarea
        name="textarea"
        rows="5"
        cols="30"
        placeholder="Left your Comment"
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
