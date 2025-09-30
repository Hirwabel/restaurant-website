import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      padding: "15px 0",
      backgroundColor: "#fefae0", // light cream
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/menu" className="nav-link">Menu</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
}
