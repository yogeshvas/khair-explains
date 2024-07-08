import React from "react";
import { MoonLoader, SyncLoader } from "react-spinners";

const Spinner = ({ size }) => {
  return (
    <div className="p-10" size={size}>
      <MoonLoader color="#ffffff" />
    <div className="mt-2 ml-2">Loading</div>
    </div>
  );
};

export default Spinner;
