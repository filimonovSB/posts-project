import {Routes, Route} from 'react-router-dom'

import AboutPage from '../pages/AboutPage'
import CommentsPage from '../pages/CommentsPage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import PostsPages from '../pages/PostsPages'

export const privateRoutes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/posts', element: <PostsPages /> },
  { path: '/*', element: <NotFoundPage /> },
  { path: '/comments/:id', element: <CommentsPage /> },
]

export const publicRoutes = [
  { path: '/*', element: <NotFoundPage /> },
  { path: '/login', element: <LoginPage /> },
]

const Router = ({isAuth}) => {
  return (
    <>
       {isAuth
        ? 
          <Routes>
            {privateRoutes.map((route) => (
              <Route
                 key={route.path}
                 path={route.path}
                 element={route.element}
              />
            ))}
          </Routes>
        : 
          <Routes>
           {publicRoutes.map((route) => (
               <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
            ))}
          </Routes>
        }
    </>
  )
}

export default Router