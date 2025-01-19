import { Link } from "react-router";
import { MenuItems } from "../../constants";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-20 max-w-screen-2xl border-b border-gray-200">
      <Link to={"/"} className="font-bold text-gray-900 text-xl">
        Navbar
      </Link>
      <div className="flex items-center gap-4">
        {MenuItems.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="text-sm text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-1"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
