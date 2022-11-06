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
