import { createAsyncThunk } from '@reduxjs/toolkit'

import { requestAPI } from '../../api'
import { addPosts, addCountsPages } from '../slices/postsSlice'

export const loadPosts = createAsyncThunk(
  '@@posts/loadPosts',
  async (page = 1, { dispatch }) => {
    try {
      const responce = await requestAPI.get('posts', {
        params: {
          _limit: 10,
          _page: page,
        },
      })
      dispatch(addPosts(responce.data))
      dispatch(addCountsPages(responce.headers['x-total-count']))  
    } catch (error) {
      console.log(error.message)
    }
    
  }
)
