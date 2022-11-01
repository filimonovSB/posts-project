import React from "react";
import Box from "../UI/Box";
import { Button, Table, Input, Pagination, Select } from "antd";
const { Search } = Input;
const FiltersPost = ({ filter, setfilter }) => {
  const handleChangeSort = (value) => {
    setfilter({ ...filter, sort: value });
  };
  const handleSearch = (e) => {
    setfilter({ ...filter, query: e.target.value });
  };
  return (
    <Box w="500px" mt={15} mb={15}>
      <div style={{ display: "flex" }}>
        <Box pr={10}>
          <h4>Сортировка постов</h4>
          <Select
            placeholder="Search to Select"
            showSearch
            defaultValue="none"
            style={{ width: 200 }}
            onChange={handleChangeSort}
            value={filter.sort}
          >
            <Select.Option value="none">Нет</Select.Option>
            <Select.Option value="title">По названию</Select.Option>
            <Select.Option value="body">По описанию</Select.Option>
          </Select>
        </Box>
        <Box pl={10}>
          <h4>Поиск постов</h4>
          <Search
            placeholder=" поиск постов"
            value={filter.query}
            onChange={handleSearch}
          />
        </Box>
      </div>
    </Box>
  );
};

export default FiltersPost;
