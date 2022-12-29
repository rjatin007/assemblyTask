import React from "react";
import "./Spinner.css";
function Spinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0.5">
      <div className="loader">Loading...</div>
    </div>
  );
}

export default Spinner;
