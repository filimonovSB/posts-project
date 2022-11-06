import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Table, Pagination } from 'antd'
import { useDispatch } from 'react-redux'

import Box from '../UI/Box'
import { removePost } from '../../store/thunks/removePost'
import { changeId, changePage } from '../../store/slices/postsSlice'


const TablePosts = ({posts,countPages,page,setModalChange}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRemovePost = (id) => {
        dispatch(removePost(id))
    }
    const handleChangePage = (page) => {
        dispatch(changePage(page))
    }
    const handleOpenComments = (id) => {
        navigate(`/comments/${id}`)
    }
    const handleOpenModalChange = (id) => {
       dispatch(changeId(id))
       setModalChange(true)
    }
    const columns = [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
        },
        { title: 'Название', dataIndex: 'title', key: 'title' },
        { title: 'Описание', dataIndex: 'body', key: 'body' },
        {
          title: 'Подробнее',
          key: 'OpenComments',
          render: (_, { id }) => (
            <Button onClick={() => handleOpenComments(id)}>
              Посмотреть коментарии
            </Button>
          ),
        },
        {
          title: 'Операции',
          key: 'operations',
          render: (_, { id }) => (
            <>
              <Button onClick={() => handleRemovePost(id)}>Удалить</Button>
              <Button onClick={() => handleOpenModalChange(id)}>Изменить</Button>
            </>
          ),
        },
    ]
    
  return (
    <>
        <Table
            dataSource={posts}
            columns={columns}
            pagination={false}
            rowKey="postsTable"
        />
        <Box mt={15} mb={15}>
            <Pagination
            defaultCurrent={page}
            total={Math.ceil(countPages / 10) * 10}
            onChange={handleChangePage}
            showSizeChanger={false}
            />
      </Box>
    </>
  )
}

export default TablePosts