import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <h2><a href="/">Home</a></h2>
      <h2><Link to={'/gallery'} >Gallery</Link></h2>
      <h2><Link to={'/album'}>Album</Link></h2>
    </nav>
  );
}

export default Navbar;