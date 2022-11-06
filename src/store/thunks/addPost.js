import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestAPI } from '../../api'

import { loadPosts } from './loadPosts'

export const addPost = createAsyncThunk(
  '@@posts/addPost',
  async (newPost, { dispatch, getState }) => {
    try {
          await requestAPI.post('posts', { userId: 6, title: newPost.title, body: newPost.body })
    } catch (error) {
      console.log(error) 
    }
    
  },
)
