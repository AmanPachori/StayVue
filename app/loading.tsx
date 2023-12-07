import React from "react";

const Loading = () => {
  return (
    <div className="text-center h-[100vh] flex-col justify-center items-center backdrop-blur-sm">
      <span className="loader"></span>
      <h1 className="text-primary italic font-semibold text-xl logo">
        Loading .....
      </h1>
      <p className="text-primary text-normal font-light italic logo">
        Hold on tight
      </p>
    </div>
  );
};

export default Loading;
