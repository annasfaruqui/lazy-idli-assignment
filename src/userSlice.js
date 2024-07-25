import { createSlice } from "@reduxjs/toolkit";
import { data } from "./data/sample-data";

const tempData = [
  {
    id: 1,
    name: "John Doe",
    score: "45:12.945",
  },
  {
    id: 2,
    name: "Jane Smith",
    score: "33:27.732",
  },
  {
    id: 3,
    name: "Alice Johnson",
    score: "12:58.631",
  },
  {
    id: 4,
    name: "Bob Brown",
    score: "27:45.214",
  },
  {
    id: 5,
    name: "Charlie Davis",
    score: "51:33.827",
  },
  {
    id: 6,
    name: "Emily Clark",
    score: "16:04.529",
  },
  {
    id: 7,
    name: "Frank Edwards",
    score: "38:22.784",
  },
  {
    id: 8,
    name: "Grace Harris",
    score: "54:07.613",
  },
  {
    id: 9,
    name: "Henry Lewis",
    score: "25:50.308",
  },
  {
    id: 10,
    name: "Isla Martinez",
    score: "48:15.420",
  },
  {
    id: 11,
    name: "Jack Nelson",
    score: "37:59.101",
  },
  {
    id: 12,
    name: "Karen Owen",
    score: "21:23.902",
  },
];

const initialUsersState = {
  users: tempData,
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
