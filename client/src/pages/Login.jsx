import { useState } from 'react';

import ShareMeLogo from '../assets/images/logos/share-me-logo.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-full flex flex-col items-center gap-[4rem]">
      <img src={ShareMeLogo} alt="Share Me Logo" className="h-[80px]" />
      <form className="w-full h-full max-w-[450px] max-h-[500px] flex flex-col items-center shadow-md rounded-[30px]">
        <input type="text" placeholder="Email or Username" />
        <div>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
        </div>
        <button className="bg-aquamarine px-6 rounded-xl py-1">Login</button>
      </form>
    </div>
  );
}



export default Login;
