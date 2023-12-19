import axios from "axios";

export default async function Posts({ params }) {
  try {
    const { data: post } = await axios.get(
      `http://localhost:3001/post/${params.id}`,
    );
    const comments = post.comments;
    return (
      <div key={post.id}>
        <div>{post.post.title}</div>
        <div>{post.post.body}</div>
        <ul>
          {comments.map((comment) => (
            <div key={comment.id}>
              <li>{comment.name}</li>
              <li>{comment.email}</li>
              <li>{comment.body}</li>
            </div>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <p>Page error</p>;
  }
}
