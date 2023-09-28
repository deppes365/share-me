import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../Redux/user/userSlice";
import ShareMeLogo from "../assets/images/logos/share-me-logo.png";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

function Navbar() {
  const { loggedIn } = useAuthStatus();
  const [menuActive, setMenuActive] = useState(false);
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);

      dispatch(clearState());
      navigate("/login");
    } catch (e) {}
  };

  return (
    <div className="w-full h-[4rem] bg-white flex justify-center items-center fixed top-0 left-0 z-20">
      <div className="w-full max-w-[1600px] px-4 md:px-8 flex justify-between items-center">
        <NavLink to="/" className="text-xl">
          <img src={ShareMeLogo} alt="Share Me Logo" className="h-[60px]" />
        </NavLink>

        <div className="flex items-center order-2">
          {loggedIn ? (
            <>
              <p>@{username}</p>
              <button
                className="bg-aquamarine py-1 px-2 ml-4 rounded-[15px] text-slate-50 font-bold tracking-[0.05em] duration-200 hover:shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  handleSignOut();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="bg-aquamarine py-1 px-2 rounded-[15px] text-slate-50 font-bold tracking-[0.05em] duration-200 hover:shadow-md"
              >
                Login
              </NavLink>
              <NavLink to="/register" className="ml-2">
                Register
              </NavLink>
            </>
          )}
          <div
            className={`hamburger ml-4 [&>div]:bg-aquamarine flex md:hidden cursor-pointer 
                        ${menuActive ? "active" : ""}`}
            onClick={() => setMenuActive((p) => !p)}
          >
            <div className="topLine"></div>
            <div className="middleLine"></div>
            <div className="bottomLine"></div>
          </div>
        </div>

        <div
          className={`fixed md:static top-0 left-0 w-full md:w-auto h-full md:h-auto flex flex-col md:flex-row items-center bg-slate-500 gap-6 [&>a]:text-3xl md:[&>a]:text-lg pt-[8rem] duration-300 md:translate-x-0 md:bg-transparent md:gap-4 md:pt-0 order-1 
                    ${menuActive ? "" : "translate-x-[100%]"}`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/app/about">About</NavLink>
          <NavLink to="/templates">Templates</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
