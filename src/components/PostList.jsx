import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PostList.css";
import { clipText } from "../utils";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import Markdown from "react-markdown";

const PostList = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const TOKEN = import.meta.env.VITE_BEARER_TOKEN;
      try {
        const response = await fetch("https://blog-api-qyys.onrender.com/posts/published", {
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
      <section className="container">
        <h2>Latest Posts</h2>

        {
          // If posts array exists and has length > 0 then display the posts
          posts ? (
            posts.length > 0 ? (
              <div className="posts">
                {posts.map((post) => (
                  <Link to={`/posts/${post.id}`} key={post.id} className="post">
                    <article>
                      <header>
                        <b style={{fontSize: "1.1em"}}>{post.title}</b>
                      </header>
                      <Markdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeSanitize]}
                      >
                        {clipText(post.content)}
                      </Markdown>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div>
                It's empty in here. Create a{" "}
                <Link to="/posts/new">new post</Link>!
              </div>
            )
          ) : (
            // Else Show loading animation
            <div aria-busy="true"></div>
          )
        }
      </section>
    </>
  );
};

export default PostList;
