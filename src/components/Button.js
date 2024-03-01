import React from "react";

const Button = ({ btnName }) => {
  return (
    <div>
      <button className=" w-max mx-2 px-2 py-1 text-white font-semibold bg-[#3c3c3c] rounded-lg">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
