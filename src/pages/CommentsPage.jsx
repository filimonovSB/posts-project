import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import Box from '../components/UI/Box'
import { loadComments } from '../store/thunks/loadComments'
import ListComments from '../components/list-comments/ListComments'

const CommentsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = useParams().id

  const comments = useSelector((state) => state.comments)
  useEffect(() => {
    dispatch(loadComments(id))
  }, [])

  return (
    <>
      <Box mt={20}>
        <Button
          type="primary"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size="large"
          onClick={() => {
            navigate(-1)
          }}
        />
        Вернуться к постам
      </Box>
      <h1>Пост {id}</h1>
      <ListComments comments={comments}/>
    </>
  )
}

export default CommentsPage
