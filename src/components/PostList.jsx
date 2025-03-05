import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const TOKEN = import.meta.env.VITE_BEARER_TOKEN;
      try {
        const response = await fetch("http://localhost:3000/posts", {
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
        setPosts(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <section>{error}</section>;
  return (
    <>
      <section>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <div>{post.title}</div>
                <div>{post.content}</div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default PostList;
