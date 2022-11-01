import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "@@comments",
  initialState: [
    { id: 1, name: "test", email: "test@mail.ru", body: "test body" },
    { id: 2, name: "test", email: "test@mail.ru", body: "test body" },
    { id: 3, name: "test", email: "test@mail.ru", body: "test body" },
  ],
  reducers: {
    addComments: (state, { payload }) => {
      return [...payload];
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { addComments } = commentsSlice.actions;
