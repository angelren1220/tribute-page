import "../styles/navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={"/"}>Tribute</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/gallery"}>Gallery</Link>
        </li>
        <li>
          <Link to={"/album"}>Album</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;