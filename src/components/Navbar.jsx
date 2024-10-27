import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuToggle = () => {
    setShowMenu(!showMenu);
    console.log("clicked");
    console.log(showMenu);
  };

  return (
    <>
      <div className="flex justify-between py-4 px-10 bg-orange-400">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className="sm:hidden">
          <RxHamburgerMenu
            onClick={showMenuToggle}
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex gap-10">
          <div>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </div>
          <div>
            <Link to="/" className="hover:underline">
              Products
            </Link>
          </div>
          <div>
            <Link to="/" className="hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>

      {showMenu ? (
        <div className="sm:hidden absolute right-0 h-screen bg-orange-400 w-3/12 justify-end gap-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </div>
            <div>
              <Link to="/" className="hover:underline">
                Products
              </Link>
            </div>
            <div>
              <Link to="/" className="hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
