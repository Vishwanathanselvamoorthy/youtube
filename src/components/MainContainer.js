import React from "react";
import ButtonList from "./ButtonList";

import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const buttons = useSelector((state) => state.button.showButton);

  return (
    <div className="-z-0">
      {buttons && <ButtonList />}

      <Outlet />
    </div>
  );
};

export default MainContainer;
