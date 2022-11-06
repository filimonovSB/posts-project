import { createAsyncThunk } from '@reduxjs/toolkit'
import { requestAPI } from '../../api'
import { loadPosts } from './loadPosts'
export const changeDeskPost = createAsyncThunk(
  '@@posts/changeDeskPost',
  async (newDesk, { dispatch, getState }) => {
    const responce = await requestAPI.patch(
      'posts/' + getState().posts.idForChange,
      {
        body: newDesk,
      }
    )
    console.log('ответ от patch' + responce)
    dispatch(loadPosts(getState().posts.page))
  }
)
