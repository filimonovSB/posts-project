import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/assets/logo/Logo.svg";
import { AuthContext } from "./components/context/AuthContext";
import MainMenu from "./components/menu/MainMenu";
import { privateRoutes, publicRoutes } from "./router";

function App() {
  const [Auth, setAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ Auth, setAuth }}>
        <Layout>
          <Header
            style={{
              height: "70px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img src={Logo} height="55px" />
            </div>
            <MainMenu setAuth={setAuth} Auth={Auth} />
          </Header>
          <Content style={{ padding: "0 50px", minHeight: "90vh" }}>
            <div className="site-layout-content">
              {Auth ? (
                <Routes>
                  {privateRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    ></Route>
                  ))}
                </Routes>
              ) : (
                <Routes>
                  {publicRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                    ></Route>
                  ))}
                </Routes>
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Filimonov Sergei ©2022
          </Footer>
        </Layout>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
