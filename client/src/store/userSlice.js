import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  value: "userSlice",
  users: [],
  it: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = "Login !!";
      state.users = action.payload;
    },
    logout: (state) => {
      state.value = "Logout !!";
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {login, logout, incrementByAmount} =
  userSlice.actions;
export default userSlice.reducer;
