import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

const Navbar = () => {

  const [authUser,setAuthUser] = useAuth();

 const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);

useEffect(() => {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

const [menuOpen, setMenuOpen] = useState(false);


  const navItems = (
    <>
      <li>
      <a className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black" href="/">
        Home
      </a>
    </li>
    <li>
      <a className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black" href="/course">
        Course
      </a>
    </li>
    <li>
      <a className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black" href='/contact us'>
        Contact
      </a>
    </li>
    <li>
      <a className="px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black">
        About
      </a>
    </li>
    </>
  )


const location = useLocation();
const navigate = useNavigate();

useEffect(() => {
  if (location.state?.openLogin) {
    const modal = document.getElementById("login_modal");

    if (modal) {
      modal.showModal();
    }

    // clear state after opening
    navigate(location.pathname, { replace: true });
  }
}, [location]);

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
          sticky
  ? "bg-white dark:bg-slate-700 shadow-md"
  : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">

  {/* MOBILE MENU */}
  <div className="relative lg:hidden">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="btn btn-ghost p-3 dark:bg-slate-500 mr-4"
    >
      ☰
    </button>

    {menuOpen && (
      <ul className="absolute left-0 mt-3 w-52 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg z-[999] p-2">

        <li onClick={() => setMenuOpen(false)}>
          <a href="/" className="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black">
            Home
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="/course" className="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black">
            Course
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href='/contact us' className="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black">
            Contact
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a className="block px-3 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black">
            About
          </a>
        </li>

      </ul>
    )}
  </div>

  <a className="text-2xl font-bold cursor-pointer">bookStore</a>
</div>

          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>

            <div className="hidden md:block border">
              <label className="input bg-white dark:bg-gray-800 text-black dark:text-white">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search"
  placeholder="Search"
  className="text-black dark:text-white bg-transparent outline-none" />
              </label>
            </div>

<label className="cursor-pointer">
  <input
    type="checkbox"
    className="hidden"
    checked={theme === "dark"}
    onChange={() =>
      setTheme(theme === "light" ? "dark" : "light")
    }
  />

  {theme === "light" ? (
    <span className="text-3xl">🌙</span>
  ) : (
    <span className="text-3xl">☀️</span>
  )}
</label>
          {
            authUser?<Logout/>:
             <div>
              <a className="bg-black text-white px-3 py-2 rounded-md over:bg-slate-900 active:scale-150 active:shadow-inner shadow-md transition-all duration-150 cursor-pointer dark:bg-base-200 dark:text-black"
               onClick={()=>document.getElementById("login_modal").showModal()}>
                Login
              </a>
              <Login/>
            </div>
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar