import { Helmet } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthLayout } from './components/layout/AuthLayout'
import { MainLayout } from './components/layout/MainLayout'
import { AuthProvider } from './components/providers/AuthProvider'
import { DocumentsPage } from './pages/DocumentsPage'
import { FullDocument } from './pages/FullDocument'
import { InitialPage } from './pages/InitialPage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <InitialPage />,
    },
    {
      path: '/documents',
      element: <MainLayout />,
      children: [
        {
          element: <DocumentsPage />,
          index: true,
        },
        {
          path: '/documents/:documentId',
          element: <FullDocument />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/signup',
          element: <SignupPage />,
        },
      ],
    },
  ])

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#202020" />
      </Helmet>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
