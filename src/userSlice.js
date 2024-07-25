import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data/sample-data";

const initialUsersState = {
  users: data,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export const getUsers = (state) => state.users.users;

export default usersSlice.reducer;
