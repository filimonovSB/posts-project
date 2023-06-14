import React from 'react'
import { Input, Select } from 'antd'
import styled from 'styled-components'

import Box from '../UI/Box'

const { Search } = Input

const FiltersPost = ({ filters, setfilters }) => {
  const handleChangeSort = (value) => {
    setfilters({ ...filters, sort: value })
  }
  const handleSearch = (e) => {
    setfilters({ ...filters, query: e.target.value })
  }

  return (
    <Box w={500} mt={15} mb={15}>
      <FlexWrapper>
        <Box pr={10}>
          <h4>Сортировка постов</h4>
          <Select
            placeholder="Search to Select"
            showSearch
            defaultValue="none"
            style={{ width: 200 }}
            onChange={handleChangeSort}
            value={filters.sort}
          >
            <Select.Option value="none">Нет</Select.Option>
            <Select.Option value="title">По названию</Select.Option>
            <Select.Option value="body">По описанию</Select.Option>
          </Select>
        </Box>
        <Box pl={10}>
          <h4>Поиск постов</h4>
          <Search
            placeholder="поиск постов"
            value={filters.query}
            onChange={handleSearch}
          />
        </Box>
      </FlexWrapper>
    </Box>
  )
}

export default FiltersPost

const FlexWrapper = styled.div`
  display: flex;
`