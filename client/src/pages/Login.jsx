import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Redux/user/userSlice";
import ShareMeLogo from "../assets/images/logos/share-me-logo.png";
import GoogleLogo from "../assets/images/logos/google-logo.png";
import { RotatingLines } from "react-loader-spinner";
import InputField from "../components/InputField";
import { loginUser } from "../utils/authFunctions";
import { useAuthStatus } from "../hooks/useAuthStatus";

function Login() {
  const { loggedIn } = useAuthStatus();
  // const { clientEmail, password } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false);

  const [loginError, setLoginError] = useState({
    error: false,
    fieldInError: "",
    message: "",
  });

  const dispatch = useDispatch();

  const login = async () => {
    setLoading(true);

    const { error, userData } = await loginUser(formData.email, formData.password);

    userData && dispatch(
      updateUser({
        ...userData,
      }),
    );

    setLoginError((prevState) => ({
      ...prevState,
      ...error,
    }));

    setFormData(prevState => ({
      ...prevState,
      password: ''
    }))

    setLoading(false);
  };

  const handleChange = (e) => {
    if (loginError.error) {
      setLoginError((prevState) => ({
        ...prevState,
        error: false,
        fieldInError: "",
        message: "",
      }));
    }

    // dispatch(
    //   updateUser({
    //     [e.target.name]: e.target.value,
    //   }),
    // );

    setFormData( prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <>
      {loggedIn && <Navigate to="/studio" />}
      <div className="w-full min-h-[100dvh] h-full flex justify-center bg-[#E5E5E5]">
        <div className="bg-stone-100 w-full h-full min-h-[100dvh] md:min-h-[auto] p-4 md:mt-[7rem] md:max-w-[400px] md:max-h-[550px] md:shadow-lg md:rounded-[30px]">
          <div className="w-full flex justify-center">
            <img src={ShareMeLogo} alt="Share Me Logo" className="h-[80px]" />
          </div>
          <form className="flex flex-col items-center">
            <h1 className="mb-10">
              Login or{" "}
              <NavLink to="/register" className="text-blue-600">
                Create an account
              </NavLink>
            </h1>

            {/* Email */}
            <InputField
              label="Email or Username"
              inputType="text"
              name="email"
              value={formData.email}
              handleChange={handleChange}
              error={loginError}
            />
            {/* Password */}
            <InputField
              label="Password"
              inputType="password"
              name="password"
              value={formData.password}
              handleChange={handleChange}
              error={loginError}
            />
            {loginError.error && (
              <p className="text-red-500">{loginError.message}</p>
            )}
            <button
              className="bg-aquamarine py-2 px-6 rounded-[20px] shadow-md flex gap-2 disabled:bg-neutral-400 mt-3 cursor-pointer disabled:cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
              disabled={!formData.email.length || !Boolean(formData.password?.length >= 6)}
            >
              {loading && (
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="25"
                  visible={true}
                />
              )}
              <span>Login</span>
            </button>

            <p className="text-xl mt-2 mb-2">or</p>
            <div className="flex items-center gap-2 shadow-xl rounded-[30px] px-4 cursor-pointer">
              <img
                src={GoogleLogo}
                alt="Google logo"
                className="w-[50px] h-[50px]"
              />
              <p>Login with Google</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
