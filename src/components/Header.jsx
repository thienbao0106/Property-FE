import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-mainColor p-4">
      <div>Logo Công ty PPC</div>
      <div>
        <Link className="hover:text-red-400" to="/contracts">
          Contracts
        </Link>
      </div>
      <div>Content here</div>
    </nav>
  );
};

export default Header;
