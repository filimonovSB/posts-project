import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, Button } from 'antd'

const MainMenu = ({ Auth, setAuth }) => {
 
  const navigate = useNavigate()

  const handleLogout = () => {
    setAuth(false)
    localStorage.removeItem('auth')
    navigate('/login')
  }

  const publicLinks = [
    {
      key: 3,
      label: <NavLink to={'/login'}>Войти</NavLink>,
    },
  ]
  const privateLinks = [
    {
      key: 1,
      label: <NavLink to={'/about'}> О сайте</NavLink>,
    },
    {
      key: 2,
      label: <NavLink to={'/posts'}>Посты</NavLink>,
    },

    {
      key: 4,
      label: <Button onClick={handleLogout}>Выйти</Button>,
    },
  ]

  return (
    <Menu
      mode="horizontal"
      style={{ width: '400px', height: '70px' }}
      items={
        Auth
          ? privateLinks
          : publicLinks
      }
    />
  )
}

export default MainMenu
