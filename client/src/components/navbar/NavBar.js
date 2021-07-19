import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  const path = props.location.pathname;

  return (
    <div className="navbar">
      <Link className={path === "/" ? "active" : ""} to="/">
        Home
      </Link>
      <Link className={path === "/about" ? "active" : ""} to="/about">
        About Us
      </Link>
    </div>
  );
}

export default NavBar;
