import { Link } from "react-router-dom";
import MainLogo from "../assets/MainLogo";
const Header = () => {
  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <Link to="/" className="mainLogo">
              <MainLogo /> OdinBlog
            </Link>
          </li>
        </ul>
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
  );
};

export default Header;
