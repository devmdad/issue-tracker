import React from "react";

const Spinner = () => {
  return (
    <div className=" flex justify-center items-center ml-1">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
    </div>
  );
};

export default Spinner;
