import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: '',
  firebaseUID: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    clearState: () => ({
      ...initialState
    })
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, clearState } = userSlice.actions;

export default userSlice.reducer;
