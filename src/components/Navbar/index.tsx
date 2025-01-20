import { Link, NavLink } from "react-router";
import { MenuItems } from "../../constants";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-20 max-w-screen-2xl border-b border-gray-200">
      <Link
        state={{ from: "/" }}
        to={"/"}
        className="font-bold text-gray-900 text-xl"
      >
        Navbar
      </Link>
      <div className="flex items-center gap-4">
        {MenuItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? "text-sm text-red-600 hover:text-red-800 underline underline-offset-2"
                : "text-sm text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-1"
            }
          >
            {item.name}
          </NavLink>
        ))}
        <Link relative="path" to={"."}>
          Back
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
