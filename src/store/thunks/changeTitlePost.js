import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAPI } from "../../api";
import { loadPosts } from "./loadPosts";
export const changeTitlePost = createAsyncThunk(
  "@@posts/changeTitlePost",
  async (newTitle, { dispatch, getState }) => {
    const responce = await requestAPI.patch(
      "posts/" + getState().posts.idForChange,
      {
        title: newTitle,
      }
    );
    console.log("ответ от patch" + responce);
    dispatch(loadPosts(getState().posts.page));
  }
);
