import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col mt-6">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
