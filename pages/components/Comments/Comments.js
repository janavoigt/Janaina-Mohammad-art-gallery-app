export default function Comments({ comments }) {
  return (
    <>
      <h2>Comments</h2>
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
