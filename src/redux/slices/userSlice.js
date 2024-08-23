import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.value = [...state.value, action.payload];
      //   console.log("first", state.value);
    },
    deleteUser: (state, action) => {
      let userId = action.payload;
      let newArray = state.value.filter((v) => v._id !== userId);
      state.value=newArray;
      console.log(userId, newArray);
    },
  },
});
export default userSlice.reducer;
export const { addUsers, deleteUser } = userSlice.actions;
