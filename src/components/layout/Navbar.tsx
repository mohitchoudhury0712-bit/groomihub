import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Groomi<span>Hub</span>
      </Link>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#why-groomihub">Why Us</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <Link to="/booking" className="nav-book">
        <span>Book Now</span>
        <span className="nav-book-arrow">→</span>
      </Link>
    </nav>
  );
};

export default Navbar;