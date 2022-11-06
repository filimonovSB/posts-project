import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: '@@posts',
  initialState: {
    pages: 5,
    page: 1,
    idForChange: 1,
    posts: [
      { id: 1, title: 'Имя пост 1', body: 'Описание поста 1', key: 1 },
      { id: 2, title: 'Имя пост 2', body: 'Описание поста 2', key: 2 },
      { id: 3, title: 'Имя пост 3', body: 'Описание поста 3', key: 3 },
      { id: 4, title: 'Имя пост 4', body: 'Описание поста 4', key: 4 },
      { id: 5, title: 'ААААААААААА', body: 'Описание поста 5', key: 5 },
    ],
  },
  reducers: {
    addPosts: (state, { payload }) => {
      return { ...state, posts: payload }
    },
    addCountsPages: (state, { payload }) => {
      return { ...state, pages: payload }
    },
    changePage: (state, { payload }) => {
      return { ...state, page: payload }
    },
    changeId: (state, { payload }) => {
      return { ...state, idForChange: payload }
    },
  },
})

export const postsReducer = postsSlice.reducer
export const { changeId, changePage, addPosts, addCountsPages } =
  postsSlice.actions
