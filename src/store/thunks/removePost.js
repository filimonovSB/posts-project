import { requestAPI } from '../../api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { loadPosts } from './loadPosts'
export const removePost = createAsyncThunk(
  '@@posts/removePost',
  async (id, { dispatch, getState }) => {
    try {
      await requestAPI.delete(`posts/${id}`)  
      dispatch(loadPosts(getState().posts.page))
    } catch (error) {
      console.log(error.message)
    }  
  }
)
