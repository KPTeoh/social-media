import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to={"/"}>
            Social<span>Media</span>
          </Link>
          <div></div>
        </div>
      </div>
    </nav>
  );
};
