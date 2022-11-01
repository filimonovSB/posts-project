import React, { useState } from "react";
import Box from "../UI/Box";
import { Button, Input, Modal } from "antd";
import { addPost } from "../../store/thunks/addPost";
import { useDispatch } from "react-redux";
import { loadPosts } from "../../store/thunks/loadPosts";

const CreatePost = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const handleAddpost = ({ page }) => {
    dispatch(addPost(newPost));
    setNewPost({});
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [newPost, setNewPost] = useState({
    id: "1",
    title: "",
    body: "",
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="">
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
        <Box w="350px" m={15}>
          <label htmlFor="">Название поста</label>
          <Input
            placeholder="Введите заголовог поста"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Box mt={15} mb={15}>
            <label htmlFor="">Описание поста</label>
            <Input
              placeholder="Введите тело поста"
              value={newPost.body}
              onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePost;
