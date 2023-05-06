import { createSlice } from "@reduxjs/toolkit";

const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
    // more reducers here...
  },
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
