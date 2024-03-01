import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import buttonSlice from "./buttonSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    search: searchSlice,
    chat: chatSlice,
    button:buttonSlice,
  },
});
export default store;
