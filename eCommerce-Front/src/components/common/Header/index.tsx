import { IconShoppingBag, IconWishlist } from "@components/eCommerce";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="relative">
      <nav>
        <div className="flex flex-wrap justify-between items-center p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/img/logo.svg" className="h-16 outline-none" alt="Logo" />
          </a>
          {/*  Icons */}
          <div className="flex justify-between items-center w-[45%] md:w-[10%] text-lg">
            <div className="flex justify-around w-[60%] md:w-full">
              <IconWishlist />
              <IconShoppingBag />
            </div>
            <CiMenuFries
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden cursor-pointer"
            />
          </div>
        </div>
      </nav>

      <header className="hidden md:flex justify-center">
        <nav className="backdrop-blur-lg text-black bg-[rgba(255,255,255,0.1)] rounded-full drop-shadow-md shadow-sm-light w-[50vw] mx-auto flex justify-between items-center py-2 px-4 fixed top-5 left-0 right-0 z-[1000]">
          <Nav>
            <li>
              <NavLink
                to="/"
                className="hover:text-secondary"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className="hover:text-secondary">
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="hover:text-secondary">
                About Us
              </NavLink>
            </li>
          </Nav>
          <div>
            <div className="relative flex items-center">
              <a
                className="me-4 text-secondary hover:text-primary transition-all duration-300"
                href="#"
              >
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
              </a>

              <div
                className="relative"
                data-twe-dropdown-ref
                data-twe-dropdown-alignment="end"
              >
                <a
                  className="hidden-arrow me-4 flex items-center text-secondary hover:text-primary transition-all duration-300"
                  href="#"
                  id="dropdownMenuButton1"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <span className="[&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-secondary">
                    1
                  </span>
                </a>
              </div>

              <div
                className="relative"
                data-twe-dropdown-ref
                data-twe-dropdown-alignment="end"
              >
                <a
                  className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWmmZAy7wrPFClDagKvUzVvEBEmWgUljqhg&s"
                    className="rounded-full"
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={
          isNavOpen
            ? "fixed top-0 right-0 w-[80vw] h-[100vh] z-50 bg-current"
            : "hidden"
        }
      >
        <div
          className="absolute top-[30px] right-[30px] text-white text-3xl cursor-pointer"
          onClick={() => setIsNavOpen(false)}
        >
          <IoCloseSharp />
        </div>
        <ul className="flex flex-col text-center h-full justify-center leading-[100px]">
          <li>
            <NavLink
              to="/"
              className="text-white font-semibold tracking-widest text-4xl"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className="text-white font-semibold tracking-widest text-4xl"
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="text-white font-semibold tracking-widest text-4xl"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
