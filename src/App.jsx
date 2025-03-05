import { Route, Routes, Link } from "react-router-dom";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
