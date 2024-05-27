export default function Comments({ comments }) {
  return (
    <>
      <h1>Comments</h1>
      {comments?.map((comment, index) => {
        return (
          <li key={index}>
            <p>
              {Date(comment.timestamp).toLocaleString()}: {comment.comment}
            </p>
          </li>
        );
      })}
    </>
  );
}
