import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheDetails: (state, action) => {
      state = Object.assign(state,action.payload);
    },
  },
});

export const { cacheDetails } = searchSlice.actions;

export default searchSlice.reducer;
