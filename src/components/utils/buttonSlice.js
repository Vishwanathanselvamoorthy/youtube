import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "ButtonSlice",
  initialState: {
    showButton: true,
  },
  reducers: {
    closeBtn: (state) => {
      state.showButton = false;
    },
  },
});
export const {closeBtn} = buttonSlice.actions;

export default buttonSlice.reducer;
