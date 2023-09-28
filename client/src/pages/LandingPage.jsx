import React from "react";
import { useNavigate } from "react-router-dom";
import LandingImg from "../assets/images/landing.jpg";
import { FaCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../Redux/user/userSlice";

function LandingPage() {
  const navigate = useNavigate();

  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { data } = useAxios("GET", "/user", username);

  return (
    <div className="w-full flex flex-col justify-center h-auto min-h-[100dvh] pt-[4.5rem]">
      <div className="w-full max-w-[1600px] px-6 md:px-20 flex">
        <section className="w-full flex flex-col items-start pt-[7rem]">
          <p>Welcome to</p>
          <h1 className="text-6xl">Share Me</h1>
          <h3 className="text-xl">Linking Your World, One Click at a Time!</h3>
          <div className="mt-16 flex flex-col items-start">
            <p className="text-xl ml-4 mb-2">Claim your username!</p>
            <div
              className={`flex items-center border-2 mb-2 rounded-[30px] overflow-hidden shadow-md focus-within:bottom-2 ${
                data?.username
                  ? "focus-within:border-red-500"
                  : "focus-within:border-aquamarine"
              }`}
            >
              <div className="flex pl-4">
                <span>{window.location.host}/</span>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  value={username}
                  className="bg-transparent outline-none"
                  onChange={(e) =>
                    dispatch(
                      updateUser({
                        [e.target.name]: e.target.value,
                      }),
                    )
                  }
                />
              </div>
              <button
                className="bg-aquamarine px-4 py-2 text-white font-bold disabled:bg-neutral-400 hover:bg-[#00CDB1]"
                disabled={!username.length || data?.username ? true : false}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
              >
                Claim
              </button>
            </div>
            {username.length ? (
              <div
                className={`flex items-center gap-2 ml-4 py-1 px-2 rounded-lg ${
                  data?.username
                    ? "text-red-600 bg-red-200"
                    : "text-green-600 bg-green-200"
                }`}
              >
                {data?.username ? <FaTimes /> : <FaCheck />}
                <p>
                  {data?.username ? "Username taken" : "Username available"}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
        <section className="hidden md:block flex w-[75%] h-full items-start pt-[7rem]">
          <img
            src={LandingImg}
            alt="Share me landing page img"
            className="w-full max-w-[1200px]"
          />
        </section>
      </div>
      <div className="w-full max-w-[1600px] px-6 md:px-20 flex">
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-[6rem] [&>div>p]:text-center md:[&>div>p]:text-left">
          <div>
            <p>
              <b>🔗 Share All Your Links:</b>
              <br /> Consolidate your website, blog, social media profiles,
              products, and more into a single, easy-to-share page.
            </p>
          </div>
          <div>
            <p>
              <b>🎨 Customize Your Page:</b>
              <br /> Make it uniquely yours! Choose from a range of themes,
              colors, and fonts to reflect your personal style.
            </p>
          </div>
          <div>
            <p>
              <b>🚀 Boost Your Online Presence:</b>
              <br /> Simplify your social media bio by sharing just one link,
              ensuring your audience can easily discover all you have to offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
