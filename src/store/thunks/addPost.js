import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestAPI } from '../../api'

import { loadPosts } from './loadPosts'

export const addPost = createAsyncThunk(
  '@@posts/addPost',
  async (newPost, { dispatch, getState }) => {
    requestAPI
      .post('posts', { userId: 6, title: newPost.title, body: newPost.body })
      .then(() => {
        dispatch(loadPosts(getState().posts.page))
      })
      .catch((error) => {
        console.log(error)
      })
  },
)
