import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation(); // Get the current location
  const [path, setPath] = useState(location.pathname); // Initialize state with the current path

  useEffect(() => {
    // Update the path state whenever the location changes
    setPath(location.pathname);
  }, [location]);

  const pathSegments = path.split("/").filter((e) => e !== "");

  // Construct the full path for each segment
  const fullPath = pathSegments.map((index: any) => {
    return `/${pathSegments.slice(0, index + 1).join("/")}`;
  });

  return (
    <div
      className={`w-full h-24 fixed top-0 left-0 z-10 bg-black bg-opacity-10 ${
        /* fullPath.length == 0 && "hidden"*/ ""
      }
       flex justify-between items-center px-10 backdrop-blur-xl backdrop-blur-xl`}
    >
      <h3 className="geistMono w-full text-lg text-green-300 tracking-normal">
        <Link to={"/"}>FORLOOPCODES </Link>
        {fullPath.map((linkPath, index) => (
          <span key={index}>
            <Link className="text-neutral-300" to={linkPath.toLowerCase()}>
              / {pathSegments[index].replace("%20", " ").toUpperCase()}{" "}
            </Link>
          </span>
        ))}
      </h3>
    </div>
  );
};
