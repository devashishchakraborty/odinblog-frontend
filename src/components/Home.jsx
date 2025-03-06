import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="container">
        <h2>Welcome to the OdinBlog Website!</h2>
        <p>
          Your go-to destination for insightful articles, expert opinions, and
          engaging discussions on topics that matter. Whether you're looking for
          the latest trends, in-depth guides, or personal stories, we've got you
          covered!
        </p>
        <Link role="button" to="/posts">View Latest Posts &nbsp;&#10140;</Link>
      </section>
    </>
  );
};

export default Home;
