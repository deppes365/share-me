import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function InputField({ label, inputType, name, value, handleChange, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((p) => !p);

  let type;

  if (inputType === "password") {
    type = `${showPassword ? "text" : "password"}`;
  } else {
    type = inputType;
  }

  return (
    <div className="w-full max-w-[300px] flex flex-col mb-2">
      <label htmlFor={name} className="ml-3">{label}</label>
      <div className={`relative w-full max-w-[300px] flex items-center justify-between border-2 py-1 px-4 rounded-[30px] focus-within:border-aquamarine ${error.fieldInError === name ? 'border-red-500' : 'border-neutral-400'}`}>
        <input
          type={type}
          className="bg-transparent outline-none w-full"
          name={name}
          value={value}
          onChange={handleChange}
        />
        {inputType === "password" && (
          <>
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="relative z-2 cursor-pointer"
                onClick={handleShowPassword}
              />
            ) : (
              <AiOutlineEye
                className="relative z-2 cursor-pointer"
                onClick={handleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default InputField;
