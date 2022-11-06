import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

import MainMenu from '../menu/MainMenu'
import Logo from '../assets/logo/Logo.svg'

const { Header} = Layout

const HeaderStyled = styled(Header)`
  display: flex;
  justify-Content: space-between;
  height: 70px;
  background-color: white;
`

const HeaderElement = () =>   
    <HeaderStyled>
        <div>
          <img src={Logo} height="55px" />
        </div>
        <MainMenu/>
    </HeaderStyled>
  
export default HeaderElement