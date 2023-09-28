import React from "react";
import { TailSpin } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner w-full h-full fixed top-0 left-0 z-20 flex justify-center items-center">
      <TailSpin
        height="250"
        width="250"
        color="#00F5D4"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
