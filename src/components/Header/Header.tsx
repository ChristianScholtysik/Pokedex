import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  //console.log("Search", search);

  return (
    <>
      <div className="navbar bg-cyan-300 bg-opacity-80">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-cyan-700 bg-opacity-80 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
              <li>
                <Link to="/type/">
                  {" "}
                  <a>Types</a>
                </Link>
              </li>
              {/* <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li> */}
            </ul>
          </div>
          Menu
        </div>

        <div className="navbar-center">
          <Link to="/">
            <img src="/public/Pokemon.svg" alt="" className="header-logo" />
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search for Pokemon"
            className="input input-bordered w-full max-w-xs bg-cyan-700 
            "
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(event.target.value)
            }
            value={search}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
