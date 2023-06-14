import { Layout } from 'antd'
import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { isAuthContext } from './components/context/AuthContext'
import Router from './router/Router'
import HeaderElement from './components/header/HeaderElement'

const { Content, Footer } = Layout


const App = () => {
  const [isAuth,setIsAuth ] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <isAuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Layout>
       <HeaderElement />
        <ContentElement style={{  }}>
          <div className="site-layout-content">
           <Router isAuth={isAuth}/>
          </div>
        </ContentElement>
        <FooterElement >Filimonov Sergei ©2022</FooterElement>
      </Layout>
    </isAuthContext.Provider>
  )
}

const ContentElement = styled(Content)`
  padding: 0 50px;
  min-height: 90vh;
`
const FooterElement = styled(Footer)`
  text-align: center;
`

export default App
