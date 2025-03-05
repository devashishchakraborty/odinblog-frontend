import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      const TOKEN = import.meta.env.VITE_BEARER_TOKEN;
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchPost();
  }, [postId]);

  if (error) return <div>{error}</div>;

  return (
    <>
      {post ? (
        <section>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </section>
      ) : (
        <div aria-busy="true"></div>
      )}
    </>
  );
};

export default Post;
