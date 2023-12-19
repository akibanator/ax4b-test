import axios from "axios";

export default async function Posts() {
  const { data: posts } = await axios.get(`http://localhost:3001/posts`);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
            <a href={`/post/${post.id}`}>{post.body}</a>
          </div>
        ))}
      </ul>
    </div>
  );
}
