import { createAsyncThunk } from '@reduxjs/toolkit'

import { requestAPI } from '../../api'
import { loadPosts } from './loadPosts'

export const changeTitlePost = createAsyncThunk(
  '@@posts/changeTitlePost',
  async (newTitle, { dispatch, getState }) => {
    try {
      await requestAPI.patch(
        'posts/' + getState().posts.idForChange,{
          title: newTitle,
        }
      )
      dispatch(loadPosts(getState().posts.page))  
    } catch (error) {
      console.log(error)
    }
  }
)
