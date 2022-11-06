import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, Button } from 'antd'
import { useContext } from 'react'

import { isAuthContext } from '../context/AuthContext'
import style from './MainMenu.module.css'

const MainMenu = () => {
  const {isAuth, setIsAuth } = useContext(isAuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuth(false)
    localStorage.removeItem('isAuth')
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
    <Menu className = {style.main}
      mode="horizontal"
      items={
        isAuth
          ? privateLinks
          : publicLinks
      }
    />
  )
}

export default MainMenu
