import { requestAPI } from '../../api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { loadPosts } from './loadPosts'
export const removePost = createAsyncThunk(
  '@@posts/removePost',
  async (id, { dispatch, getState }) => {
    requestAPI
      .delete(`posts/${id}`)
      .then(() => {
        dispatch(loadPosts(getState().posts.page))
      })
      .catch((error) => {
        console.log(error)
      })
  },
)
