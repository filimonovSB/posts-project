import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Table, Input, Pagination, Select, Modal } from "antd";
import { loadPosts } from "../store/thunks/loadPosts";
import { removePost } from "../store/thunks/removePost";
import CreatePost from "../components/createPost/CreatePost";
import Box from "../components/UI/Box";
import { changeId, changePage } from "../store/slices/postsSlice";
import { selectSortedQueryPosts } from "../store/selectors/selectPosts";
import FiltersPost from "../components/filters/FiltersPost";
import { changeDeskPost } from "../store/thunks/changeDeskPost";
import { changeTitlePost } from "../store/thunks/changeTitlePost";
import ChangePost from "../components/change_post/ChangePost";

const PostsPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filter, setfilter] = useState({
    sort: "none",
    query: "",
  });
  const [isModalNewPost, setIsModalNewPost] = useState(false);

  const [modalChange, setMoadlChange] = useState(false);

  const page = useSelector((state) => state.posts.page);
  const countPages = useSelector((state) => state.posts.pages);
  const posts = useSelector((state) =>
    selectSortedQueryPosts(state, filter.query, filter.sort)
  );

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    { title: "Название", dataIndex: "title", key: "title" },
    { title: "Описание", dataIndex: "body", key: "body" },
    {
      title: "Подробнее",
      key: "OpenComments",
      render: (_, { id }) => (
        <Button onClick={() => handleOpenComments(id)}>
          Посмотреть коментарии
        </Button>
      ),
    },
    {
      title: "Операции",
      key: "operations",
      render: (_, { id }) => (
        <>
          <Button onClick={() => handleRemovePost(id)}>Удалить</Button>
          <Button onClick={() => handleOpenModalChange(id)}>Изменить</Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    dispatch(loadPosts(page));
  }, [page]);

  const handleRemovePost = (id) => {
    dispatch(removePost(id));
  };
  const handleChangePage = (page) => {
    dispatch(changePage(page));
  };
  const handleOpenComments = (id) => {
    navigate(`/comments/${id}`);
  };
  const handleChangeDesk = (newDesk) => {
    dispatch(changeDeskPost(newDesk));
  };
  const handleChangeTitle = (newTitle) => {
    dispatch(changeTitlePost(newTitle));
  };
  const handleOpenModalChange = (id) => {
    dispatch(changeId(id));
    setMoadlChange(true);
  };
  const handleModalOK = () => {
    setMoadlChange(false);
  };
  return (
    <div className="">
      <CreatePost
        isModalOpen={isModalNewPost}
        setIsModalOpen={setIsModalNewPost}
        page={page}
      />
      <FiltersPost filter={filter} setfilter={setfilter} />
      <ChangePost
        modalChange={modalChange}
        handleModalOK={handleModalOK}
        handleChangeDesk={handleChangeDesk}
        handleChangeTitle={handleChangeTitle}
      />
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
    </div>
  );
};

export default PostsPages;
