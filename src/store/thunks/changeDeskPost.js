import { createAsyncThunk } from '@reduxjs/toolkit'

import { requestAPI } from '../../api'
import { loadPosts } from './loadPosts'

export const changeDeskPost = createAsyncThunk(
  '@@posts/changeDeskPost',
  async (newDesk, { dispatch, getState }) => {
    try {
      await requestAPI.patch(
        'posts/' + getState().posts.idForChange,{
          body: newDesk,
        }
      )
      dispatch(loadPosts(getState().posts.page))
    } catch (error) {
      console.log(error.message)
    }
    
  }
)
