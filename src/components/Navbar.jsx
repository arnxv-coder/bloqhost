import { Link } from "react-router-dom";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="logo">BloqHost</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
