import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd'

import Box from '../UI/Box'

const ChangePost = ({
  modalChange,
  handleModalOK,
  handleChangeDesk,
  handleChangeTitle,
}) => {
  const [newPost, setNewpost] = useState({
    title: '',
    desk: '',
  })
  
  return (
    <Modal
      open={modalChange}
      title="Изменить пост"
      footer={[
        <Button type="primary" onClick={handleModalOK}>
          Ok
        </Button>,
      ]}
    >
      <Box m={5} p={10}>
        <Box mb={15}>
          <Input
            placeholder="Введите новое название"
            value={newPost.title}
            onChange={(e) => {
              setNewpost({ ...newPost, title: e.target.value })
            }}
          />
        </Box>
        <Button type="primary" onClick={() => handleChangeTitle(newPost.title)}>
          Изменить название
        </Button>
        <Box mt={15} mb={15}>
          <Input
            placeholder="Введите новое описание"
            value={newPost.desk}
            onChange={(e) => {
              setNewpost({ ...newPost, desk: e.target.value })
            }}
          />
        </Box>
        <Button type="primary" onClick={() => handleChangeDesk(newPost.desk)}>
          Изменить описание
        </Button>
      </Box>
    </Modal>
  )
}

export default ChangePost
