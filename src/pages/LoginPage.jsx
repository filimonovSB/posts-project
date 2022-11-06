import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'

import { isAuthContext } from '../components/context/AuthContext'

const LoginPage = () => {
  const FlexWrapper= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  `

  const { setIsAuth } = useContext(isAuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true')
    navigate('/about')
  }

  return (
    <FlexWrapper>
      <Form
        style={{ width: '500px' }}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item
          label="Логин"
          name="username"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={handleLogin}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FlexWrapper>
  )
}

export default LoginPage
