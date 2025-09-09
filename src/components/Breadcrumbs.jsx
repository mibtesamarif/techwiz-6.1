// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="capitalize text-gray-800">{value}</span>
              ) : (
                <Link to={to} className="capitalize hover:underline">
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
