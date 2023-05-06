import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      location: "",
      breed: "",
      animal: "",
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
    // more reducers here...
  },
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
