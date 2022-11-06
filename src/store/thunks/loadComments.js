import { createAsyncThunk } from '@reduxjs/toolkit'

import { requestAPI } from '../../api'
import { addComments } from '../slices/commentsSlice'

export const laodComments = createAsyncThunk(
  '@@comments/loadComments',
  async (id, { dispatch }) => {
    try {
      const responce = await requestAPI.get('comments', {
        params: {
          postId: id,
        },
      })
      dispatch(addComments(responce.data))  
    } catch (error) {
      console.log(error.message)
    }
    
  }
)
