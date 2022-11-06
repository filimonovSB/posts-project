import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import { useDispatch } from 'react-redux'

import Box from '../UI/Box'
import { addPost } from '../../store/thunks/addPost'

const PostCreate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newPost, setNewPost] = useState({
    id: '1',
    title: '',
    body: '',
  })

  const dispatch = useDispatch()

  const handleAddpost = () => {
    dispatch(addPost(newPost))
    setNewPost({})
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Box mt={15} mb={15}>
        <Button type="primary" onClick={showModal}>
          Создать пост
        </Button>
      </Box>
      <Modal
        title="Создать пост"
        open={isModalOpen}
        onOk={handleAddpost}
        onCancel={handleCancel}
      >
        <Box w={350} m={15}>
          <label>Название поста</label>
          <Input
            placeholder="Введите заголовог поста"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Box mt={15} mb={15}>
            <label >Описание поста</label>
            <Input
              placeholder="Введите тело поста"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            />
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default PostCreate
