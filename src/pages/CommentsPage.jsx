import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "../components/UI/Box";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { laodComments } from "../store/thunks/loadComments";
import { ArrowLeftOutlined } from "@ant-design/icons";
const CommentsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().id;
  const comments = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(laodComments(id));
  }, []);
  return (
    <div>
      <Box mt={20}>
        <Button
          type="primary"
          shape="circle"
          icon={<ArrowLeftOutlined />}
          size="large"
          onClick={() => {
            navigate(-1);
          }}
        />
        Вернуться к постам
      </Box>
      <Box mt={15} mb={15}>
        <h1>Пост {id}</h1>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {comments.length ? (
            comments.map((comment) => (
              <Card
                key={comment.id}
                title="Комментарий"
                bordered={false}
                style={{ width: "350px", margin: "10px" }}
              >
                <h4>Название:</h4> {comment.name}
                <h4>email:</h4> {comment.email}
                <h4>Содержание:</h4> {comment.body}
                <br />
              </Card>
            ))
          ) : (
            <h2>Коментариев к этому посту нет!</h2>
          )}
        </div>
      </Box>
    </div>
  );
};

export default CommentsPage;