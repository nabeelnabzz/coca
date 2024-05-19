import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const pathName = localStorage.getItem("pathname");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (pathname) => {
    localStorage.setItem("pathname", pathname);
  };

  useEffect(() => {
    localStorage.setItem("pathname", "/");
  }, []);

  console.log("location", location);
  console.log("location.pathname == pathName", location.pathname == pathName);
  return (
    // <div className="flex justify-around mt-5 text-[14px]">
    //   <img src={logo} alt="logo" />
    //   <div>
    //     <nav>
    //       <ul className="flex gap-6 flex-wrap items-center">
    //         <Link to="/" onClick={() => handleClick("/")}>
    //           <li className="">
    //             <Button
    //               label="Home"
    //               color={location.pathname == "/" ? "#ffffff" : "#000000 "}
    //               background={location.pathname == "/" ? "#000000" : "#ffffff "}
    //             />
    //           </li>
    //         </Link>
    //         <Link to="/features" onClick={() => handleClick("/features")}>
    //           <li className="cursor-pointer">
    //             <Button
    //               label="Features"
    //               color={
    //                 location.pathname == "/features" ? "#ffffff" : "#000000 "
    //               }
    //               background={
    //                 location.pathname == "/features" ? "#000000" : "#ffffff "
    //               }
    //             />
    //           </li>
    //         </Link>
    //         <Link to="/pricing" onClick={() => handleClick("/pricing")}>
    //           <li className="cursor-pointer">
    //             <Button
    //               label="Pricing"
    //               color={
    //                 location.pathname == "/pricing" ? "#ffffff" : "#000000 "
    //               }
    //               background={
    //                 location.pathname == "/pricing" ? "#000000" : "#ffffff "
    //               }
    //             />
    //           </li>
    //         </Link>
    //         <Link to="/blogs" onClick={() => handleClick("/blogs")}>
    //           <li className="cursor-pointer">
    //             <Button
    //               label="Blog"
    //               color={location.pathname == "/blogs" ? "#ffffff" : "#000000 "}
    //               background={
    //                 location.pathname == "/blogs" ? "#000000" : "#ffffff "
    //               }
    //             />
    //           </li>
    //         </Link>
    //         <Link to="/resources" onClick={() => handleClick("/resources")}>
    //           <li className="cursor-pointer">
    //             <Button
    //               label="Resource"
    //               color={
    //                 location.pathname == "/resources" ? "#ffffff" : "#000000 "
    //               }
    //               background={
    //                 location.pathname == "/resources" ? "#000000" : "#ffffff "
    //               }
    //             />
    //           </li>
    //         </Link>
    //       </ul>
    //     </nav>
    //   </div>
    //   <div>
    //     <p className="text-[#FF5C00] border-[#FF5C00] border-[1px] rounded-[100px] px-4 py-1 cursor-pointer">
    //       Sign in
    //     </p>
    //   </div>
    // </div>

    <div className="flex justify-between mt-5 text-[14px]">
      <img src={logo} alt="logo" />

      {/* Menu Items */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } xl:flex xl:gap-6 xl:flex-wrap xl:items-center`}
      >
        <ul className="flex gap-6 flex-wrap items-center">
          <Link to="/" onClick={() => handleClick("/")}>
            <li className="">
              <Button
                label="Home"
                color={location.pathname == "/" ? "#ffffff" : "#000000 "}
                background={location.pathname == "/" ? "#000000" : "#ffffff "}
              />
            </li>
          </Link>
          <Link to="/features" onClick={() => handleClick("/features")}>
            <li className="cursor-pointer">
              <Button
                label="Features"
                color={
                  location.pathname == "/features" ? "#ffffff" : "#000000 "
                }
                background={
                  location.pathname == "/features" ? "#000000" : "#ffffff "
                }
              />
            </li>
          </Link>
          <Link to="/pricing" onClick={() => handleClick("/pricing")}>
            <li className="cursor-pointer">
              <Button
                label="Pricing"
                color={location.pathname == "/pricing" ? "#ffffff" : "#000000 "}
                background={
                  location.pathname == "/pricing" ? "#000000" : "#ffffff "
                }
              />
            </li>
          </Link>
          <Link to="/blogs" onClick={() => handleClick("/blogs")}>
            <li className="cursor-pointer">
              <Button
                label="Blog"
                color={location.pathname == "/blogs" ? "#ffffff" : "#000000 "}
                background={
                  location.pathname == "/blogs" ? "#000000" : "#ffffff "
                }
              />
            </li>
          </Link>
          <Link to="/resources" onClick={() => handleClick("/resources")}>
            <li className="cursor-pointer">
              <Button
                label="Resource"
                color={
                  location.pathname == "/resources" ? "#ffffff" : "#000000 "
                }
                background={
                  location.pathname == "/resources" ? "#000000" : "#ffffff "
                }
              />
            </li>
          </Link>
        </ul>
        {/* Add other menu items similarly */}
      </div>

      <div className="flex gap-2 items-center">
        {/* Hamburger Icon */}
        <button
          className="block xl:hidden text-[#FF5C00] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm16 5H4a1 1 0 110-2h16a1 1 0 110 2zm0 4H4a1 1 0 110-2h16a1 1 0 110 2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 xl:hidden text-white focus:outline-none"
          onClick={closeMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 11-1.414 1.414l-4.95-4.95-4.95 4.95a1 1 0 11-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 111.414-1.414l4.95 4.95 4.95-4.95a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Sign in Button */}
        <div>
          <p className="text-[#FF5C00] border-[#FF5C00] border-[1px] rounded-[100px] px-4 py-1 cursor-pointer">
            Sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
