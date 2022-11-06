import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadPosts } from '../store/thunks/loadPosts'
import PostCreate from '../components/post-create/PostCreate'
import { selectSortedQueryPosts } from '../store/selectors/selectPosts'
import FiltersPosts from '../components/filters/FiltersPosts'
import { changeDeskPost } from '../store/thunks/changeDeskPost'
import { changeTitlePost } from '../store/thunks/changeTitlePost'
import ChangePost from '../components/post-change/PostChange'
import TablePosts from '../components/table-posts/TablePosts'

const PostsPages = () => {
  const dispatch = useDispatch()

  const [filters, setfilters] = useState({
    sort: null,
    query: '',
  })
  const [modalChange, setModalChange] = useState(false)

  const page = useSelector((state) => state.posts.page)
  const countPages = useSelector((state) => state.posts.pages)
  const posts = useSelector((state) =>
    selectSortedQueryPosts(state, filters.query, filters.sort),
  )

  useEffect(() => {
    dispatch(loadPosts(page))
  }, [page])

  const handleChangeDesk = (newDesk) => {
    dispatch(changeDeskPost(newDesk))
  }
  const handleChangeTitle = (newTitle) => {
    dispatch(changeTitlePost(newTitle))
  }
  const handleModalOK = () => {
    setModalChange(false)
  }
  return (
    <>
      <PostCreate />
      <FiltersPosts filters={filters} setfilters={setfilters} />
      <TablePosts posts={posts} countPages={countPages} page={page} setModalChange={setModalChange}/>
      <ChangePost
        modalChange={modalChange}
        handleModalOK={handleModalOK}
        handleChangeDesk={handleChangeDesk}
        handleChangeTitle={handleChangeTitle}
      />

    </>
  )
}

export default PostsPages
