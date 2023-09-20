import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full z-50 navbar bg-accent textFont shadow-lg shadow-black-500/50 animate-fadeIn">
        <div className="navbar-start animate-fadeIn">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-accent lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-accent rounded-box w-52"
            >
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-primary font-semibold text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-primary font-semibold text-lg"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-primary font-semibold text-lg"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-primary font-semibold text-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <a
            href="https://losmandev.netlify.app/"
            className="btn btn-ghost normal-case text-xl text-primary font-semibold"
          >
            &lt;LosmanDev/&gt;
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-primary font-semibold text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-primary font-semibold text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-primary font-semibold text-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-primary font-semibold text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
