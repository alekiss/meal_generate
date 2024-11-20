import { Link } from "react-router-dom";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="./logo.png" alt="The Meal DB" />
        </Link>
      </div>
      <div className="links">
        <Link to="/meal">
          <h2>Meal</h2>
        </Link>
        <Link to="/about-project">
          <h2>About the Page</h2>
        </Link>
      </div>
    </header>
  );
};
